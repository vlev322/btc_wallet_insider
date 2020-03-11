import { put, call, select, take, fork } from "redux-saga/effects";

import { instanceAxios } from "../../../../utils/config";

import { LIMIT_ITEMS_ON_PAGE, TRANSACTIONS_PATH } from "../../../constants/api";
import { SELECT_PAGE } from "../../../constants/actions";

import { listByPageSelector, selectedPageSelector } from "../../selectors/selectors";
import { requestList, receiveList } from "./actions";

import {  ITxsMeta } from "../../../interfaces";

export function* fetchList(page: number) {
	yield put(requestList({ page }));
	const params = {
		limit: LIMIT_ITEMS_ON_PAGE,
		index: page * LIMIT_ITEMS_ON_PAGE
	};
	const { data } = yield call(instanceAxios, TRANSACTIONS_PATH, { params });
	const { payload, meta }: { payload: any[]; meta: ITxsMeta } = data;
	const list: any[] = payload.filter((txs: any) => txs.confirmations >= 3);
	const pages = Math.ceil(meta.totalCount / meta.limit);
	yield put(receiveList({ page, list, pages }));
}

export function* nextPageChange() {
	while (true) {
		const prevPage = yield select(selectedPageSelector);
		yield take(SELECT_PAGE);
		const nextPage = yield select(selectedPageSelector);
		const listByPage = yield select(listByPageSelector);
		if (prevPage !== nextPage && !listByPage[nextPage]) yield fork(fetchList, nextPage);
	}
}
