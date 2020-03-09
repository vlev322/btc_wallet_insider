import test from "tape";
import { call, fork, put, select, take } from "redux-saga/effects/";
import { expectSaga } from "redux-saga-test-plan";

import mainSaga, {
	fetchListApi,
	fetchAddressInfoApi,
	fetchList,
	fetchAddressInfo,
	nextPageChange,
	startup
} from "../src/ts/logic/sagas";

import {
	selectPage,
	requestList,
	receiveList,
	requestAddressInfo,
	receiveAddressInfo,
	SELECT_PAGE
} from "../src/ts/logic/actions";
import { selectedPageSelector, listByPageSelector, _dataByAddressSelector } from "../src/ts/logic/reducers/selectors";

const MOCK_LIST = {
	page: 1,
	pages: 491,
	limit: 1,
	start: "20110201",
	end: "20200309",
	order: "desc",
	list: [
		{
			received: 39075090,
			sent: 0,
			countReceived: 490,
			totalReceived: 19100535556,
			countSent: 1,
			totalSent: 904900,
			txId: "3549a5bffee910e4f5272b9f0f488cba289b77a2435f62475f6d89d8cc230c41",
			blockHeight: 1669312,
			confirmations: 80,
			blockIndex: 0,
			type: "mined",
			timestamp: 1583720430,
			time: "2020-03-09T02:20:30Z",
			firstSeenTimestamp: 1583720430,
			outAddressCount: 1,
			inputAddressCount: 0,
			outsCount: 1,
			inputsCount: 1,
			bSize: 120,
			size: 120,
			fee: 0,
			feeRate: 0,
			amount: 39075090,
			data: "",
			flags: ["Coinbase"],
			segwit: false,
			rbf: false,
			doubleSpend: false
		}
	]
};

test("startup Saga", t => {
	const generator = startup();
	t.deepEqual(generator.next().value, select(selectedPageSelector), "gets currently selected page");
	t.deepEqual(generator.next(1).value, fork(fetchList, 1), "delegates to fetchList to get transactions");
	t.deepEqual(generator.next().value, fork(fetchAddressInfo), "get address info");
	t.ok(generator.next().done, "must finish");
	t.end();
});

test("fetchAddressInfo Saga", t => {
	const generator = fetchAddressInfo();
	t.deepEqual(generator.next().value, put(requestAddressInfo()), "must dispatch a requestAddress action");
	t.deepEqual(generator.next().value, call(fetchAddressInfoApi), "must call fetchAddressInfoApi");
	t.deepEqual(generator.next().value, put(receiveAddressInfo()), "must dispatch a receiveAddressInfo action");
	t.ok(generator.next().done, "must finish");
	t.end();
});

test("fetchList Saga", t => {
	const page = 1;
	const generator = fetchList(page);
	t.deepEqual(generator.next().value, put(requestList(page)), "must dispatch a requestList action");
	t.deepEqual(generator.next().value, call(fetchListApi, page), "must call fetchListApi with page number");
	// t.deepLooseEqual(
	// 	generator.next(MOCK_LIST).value,
	// 	put(receiveList(page, MOCK_LIST)),
	// 	"must dispatch a receiveList action with list"
	// );
	generator.next(MOCK_LIST);
	t.ok(generator.next().done, "must finish");
	t.end();
});

test("nextPageChange Saga when switching to new page", t => {
	const generator = nextPageChange();
	t.deepEqual(generator.next().value, select(selectedPageSelector), "must select current page from store");
	t.deepEqual(generator.next(1).value, take(SELECT_PAGE), "must take a SELECT_PAGE action");
	t.deepEqual(generator.next().value, select(selectedPageSelector), "must select newly selected page from store");
	t.deepEqual(generator.next(2).value, select(listByPageSelector), "must select list by page from store");
	t.deepEqual(generator.next({}).value, fork(fetchList, 2), "delegate to fetchList for new list");
	t.deepEqual(generator.next().value, select(selectedPageSelector), "must go back to beginning of loop");
	t.end();
});
