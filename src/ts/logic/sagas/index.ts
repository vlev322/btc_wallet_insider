import { take, put, call, fork, select } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import * as actions from "../actions";
import { listByPageSelector, selectedPageSelector } from "../reducers/selectors";

export async function fetchListApi(page: any) {
	const response = await fetch(
		`https://api.bitaps.com/btc/testnet/v1/blockchain/address/transactions/mrKQkNc62v7jWsoTWVpcy72kZzE2gjTTGc?limit=25&page=${1}`
	);
	const json = await response.json();
	return json.data.list;
}

export function* fetchList(page: any) {
	yield put(actions.requestPosts(page));
	const list = yield call(fetchListApi, page);
	yield put(actions.receivePosts(page, list));
}

export function* invalidatePage() {
	while (true) {
		const { page } = yield take(actions.INVALIDATE_PAGE);
		yield call(fetchList, page);
	}
}

export function* nextPageChange() {
	while (true) {
		const prevReddit = yield select(selectedPageSelector);
		yield take(actions.SELECT_PAGE);

		const newPage = yield select(selectedPageSelector);
		const postsByReddit = yield select(listByPageSelector);
		if (prevReddit !== newPage && !postsByReddit[newPage]) yield fork(fetchList, newPage);
	}
}

export function* startup() {
	const selectedPage = yield select(selectedPageSelector);
	yield fork(fetchList, selectedPage);
}

export default function* root() {
	yield fork(startup);
	yield fork(nextPageChange);
	yield fork(invalidatePage);
}
