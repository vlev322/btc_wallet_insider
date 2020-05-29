import { call, fork, put, select, take } from "redux-saga/effects";
import { instanceAxios } from "../../../../utils/config";
import { SELECT_PAGE } from "../../../constants/actions";
import { LIMIT_ITEMS_ON_PAGE, TRANSACTIONS_PATH } from "../../../constants/api";
import { ITxsItem, ITxsMeta } from "../../../interfaces";
import { listByPageSelector, selectedPageSelector } from "../../selectors/selectors";
import { receiveList, requestList } from "./actions";

export function* fetchList(page: number) {
	yield put(requestList({ page }));
	interface IParams {
		limit: number;
		index: number;
	}

	const params: IParams = {
		limit: LIMIT_ITEMS_ON_PAGE,
		index: page * LIMIT_ITEMS_ON_PAGE
	};
	const { data } = yield call(instanceAxios, TRANSACTIONS_PATH, { params });
	const { payload, meta }: { payload: ITxsItem[]; meta: ITxsMeta } = data;
	const list: ITxsItem[] = payload.filter((txs: ITxsItem) => txs.confirmations >= 3);
	const pages: number = Math.ceil(meta.totalCount / meta.limit);
	yield put(receiveList({ page, list, pages }));
}

export function* nextPageChange() {
	while (true) {
		const prevPage: number = yield select(selectedPageSelector);
		yield take(SELECT_PAGE);
		const nextPage: number = yield select(selectedPageSelector);
		const listByPage: ITxsItem[] = yield select(listByPageSelector);
		if (prevPage !== nextPage && !listByPage[nextPage]) yield fork(fetchList, nextPage);
	}
}