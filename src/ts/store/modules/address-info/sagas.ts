import { call, put } from "redux-saga/effects";
import { instanceAxios } from "../../../../utils/config";
import { ADDRESS_INFO_PATH, LIMIT_ITEMS_ON_PAGE } from "../../../constants/api";
import { receiveAddressInfo, requestAddressInfo } from "./actions";
import { IReceivedData, ITxsItem } from "../../../interfaces/index";
import { requestList, receiveList } from "../txs-list/actions";

interface IParams {
  limit: number;
  next: number;
}

export function* fetchAddressInfo(page = 1 ) {
	yield put(requestAddressInfo({}));
	yield put(requestList({ page }));
	const params: IParams = {
    limit: LIMIT_ITEMS_ON_PAGE,
    next: page * LIMIT_ITEMS_ON_PAGE,
	};

	const { data }: IReceivedData = yield call(instanceAxios, ADDRESS_INFO_PATH, { params });
	yield put(receiveAddressInfo({ data: data.address }));
	const { total, transactions }: any = data.address;
  const list: ITxsItem[] = transactions.filter((txs: ITxsItem) => txs.confirmations >= 3);
  const pages: number = Math.ceil(total.transaction_count / params.limit);
  yield put(receiveList({ page, list, pages }));
}
