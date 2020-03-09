import { take, put, call, fork, select } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import * as actions from "../actions";
import { listByPageSelector, selectedPageSelector } from "../reducers/selectors";

const ADDRESS = "mrKQkNc62v7jWsoTWVpcy72kZzE2gjTTGc";

export async function fetchListApi(page: number) {
	const response = await fetch(
		`https://api.bitaps.com/btc/testnet/v1/blockchain/address/transactions/${ADDRESS}?limit=15&page=${page}`
	);
	const json = await response.json();
	return json.data;
}

export async function fetchAddressInfoApi() {
	const response = await fetch(`https://api.bitaps.com/btc/testnet/v1/blockchain/address/state/${ADDRESS}`);
	const json = await response.json();
	return json.data;
}

export function* fetchList(page: number) {
	yield put(actions.requestList(page));
	const listData = yield call(fetchListApi, page);
	const { list, pages } = listData;
	const filteredList = list.filter((txs: any) => txs.confirmations >= 3);
	yield put(actions.receiveList(page, filteredList, pages));
}

export function* fetchAddressInfo() {
	yield put(actions.requestAddressInfo());
	const data = yield call(fetchAddressInfoApi);
	yield put(actions.receiveAddressInfo(data));
}

export function* nextPageChange() {
	while (true) {
		const prevPage = yield select(selectedPageSelector);
		yield take(actions.SELECT_PAGE);
		const newPage = yield select(selectedPageSelector);
		const listByPage = yield select(listByPageSelector);
		if (prevPage !== newPage && !listByPage[newPage]) yield fork(fetchList, newPage);
	}
}

export function* startup() {
	const selectedPage = yield select(selectedPageSelector);
	yield fork(fetchList, selectedPage);
	yield fork(fetchAddressInfo);
}

export default function* root() {
	yield fork(startup);
	yield fork(nextPageChange);
}
