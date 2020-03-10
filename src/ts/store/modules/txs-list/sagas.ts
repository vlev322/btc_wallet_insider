import { put, call, select, take, fork } from "redux-saga/effects";

import { instanceAxios } from "../../../../utils/config";

import { listByPageSelector, selectedPageSelector } from "../../selectors/selectors";
import { LIMIT_ITEMS_ON_PAGE, TRANSACTIONS_PATH } from "../../../constants/api";
import { requestList, receiveList } from "./actions";
import { SELECT_PAGE } from "../../../constants/actions";

export function* fetchList(page: number) {
	yield put(requestList({page}));
	const params = {
		limit: LIMIT_ITEMS_ON_PAGE,
		page
	};
	const { data } = yield call(instanceAxios, TRANSACTIONS_PATH, { params });
	const { list, pages } = data.data;
	const filteredList = list.filter((txs: any) => txs.confirmations >= 3);
	yield put(receiveList({page, list:filteredList, pages}));
}

export function* nextPageChange() {
	while (true) {
		const prevPage = yield select(selectedPageSelector);
		yield take(SELECT_PAGE);
		const newPage = yield select(selectedPageSelector);
		const listByPage = yield select(listByPageSelector);
		if (prevPage !== newPage && !listByPage[newPage]) yield fork(fetchList, newPage);
	}
}
