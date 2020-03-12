import { call, put } from "redux-saga/effects";
import { instanceAxios } from "../../../../utils/config";
import { ADDRESS_INFO_PATH } from "../../../constants/api";
import { receiveAddressInfo, requestAddressInfo } from "./actions";
import { IReceivedData } from "../../../interfaces/index";

export function* fetchAddressInfo() {
	yield put(requestAddressInfo({}));
	const { data }: IReceivedData = yield call(instanceAxios, ADDRESS_INFO_PATH);
	yield put(receiveAddressInfo({ data: data.payload }));
}
