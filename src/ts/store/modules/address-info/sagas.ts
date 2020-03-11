import { put, call } from "redux-saga/effects";

import { requestAddressInfo, receiveAddressInfo } from "./actions";
import { ADDRESS_INFO_PATH } from "../../../constants/api";
import { instanceAxios } from "../../../../utils/config";

export function* fetchAddressInfo() {
	yield put(requestAddressInfo({}));
	const { data } = yield call(instanceAxios, ADDRESS_INFO_PATH);
	yield put(receiveAddressInfo({ data: data.payload }));
}
