import { fork, select } from "redux-saga/effects";
import { selectedPageSelector } from "./selectors/selectors";
import { fetchAddressInfo } from "./modules/address-info/sagas";
import { fetchList, nextPageChange } from "./modules/txs-list/sagas";

export function* startup() {
	const selectedPage:number = yield select(selectedPageSelector);
	yield fork(fetchAddressInfo);
	yield fork(fetchList, selectedPage);
}

export default function* root() {
	yield fork(startup);
	yield fork(nextPageChange);
}
