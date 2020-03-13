import test from "tape";
import { call, fork, put, select, take } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { selectedPageSelector, listByPageSelector } from "../src/ts/store/selectors/selectors";
import { SELECT_PAGE } from "../src/ts/constants/actions";
import { ADDRESS_INFO_PATH, LIMIT_ITEMS_ON_PAGE, TRANSACTIONS_PATH } from "../src/ts/constants/api";
import { requestList } from "../src/ts/store/modules/txs-list/actions";
import { receiveAddressInfo, requestAddressInfo } from "../src/ts/store/modules/address-info/actions";
import { fetchList, nextPageChange } from "../src/ts/store/modules/txs-list/sagas";
import { fetchAddressInfo } from "../src/ts/store/modules/address-info/sagas";
import { startup } from "../src/ts/store/sagas";
import { instanceAxios } from "../src/utils/config";

test("startup Saga", t => {
	const generator = startup();
	t.deepEqual(generator.next().value, select(selectedPageSelector), "gets currently selected page");
	t.deepEqual(generator.next(1).value, fork(fetchList, 1), "delegates to fetchList to get transactions");
	t.deepEqual(generator.next().value, fork(fetchAddressInfo), "get address info");
	t.ok(generator.next().done, "must finish");
	t.end();
});

test("nextPageChange Saga when switching to new page", t => {
	const PREV_PAGE = 1;
	const NEXT_PAGE = 2;
	const generator = nextPageChange();
	t.deepEqual(generator.next().value, select(selectedPageSelector), "must select current page from store");
	t.deepEqual(generator.next(PREV_PAGE as any).value, take(SELECT_PAGE), "must take a SELECT_PAGE action");
	t.deepEqual(generator.next().value, select(selectedPageSelector), "must select newly selected page from store");
	t.deepEqual(generator.next(NEXT_PAGE as any).value, select(listByPageSelector), "must select list by page from store");
	t.deepEqual(generator.next({}as any).value, fork(fetchList, 2), "delegate to fetchList for new list");
	t.deepEqual(generator.next().value, select(selectedPageSelector), "must go back to beginning of loop");
	t.end();
});
