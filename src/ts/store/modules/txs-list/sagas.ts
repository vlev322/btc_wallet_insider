import { call, fork, put, select, take } from "redux-saga/effects";
import { instanceAxios } from "../../../../utils/config";
import { SELECT_PAGE } from "../../../constants/actions";
import { LIMIT_ITEMS_ON_PAGE, TRANSACTIONS_PATH, ADDRESS_INFO_PATH } from "../../../constants/api";
import { ITxsItem, ITxsMeta } from "../../../interfaces";
import { listByPageSelector, selectedPageSelector } from "../../selectors/selectors";
import { receiveList, requestList } from "./actions";
import { IAddress } from "../../../interfaces/index";
import { fetchAddressInfo } from "../address-info/sagas";
interface IParams {
  limit: number;
  next: number;
}

// export function* fetchList(page = 0) {
//   yield put(requestList({ page }));
//   const params: IParams = {
//     limit: LIMIT_ITEMS_ON_PAGE,
//     next: page * LIMIT_ITEMS_ON_PAGE,
//   };
//   const { data } = yield call(instanceAxios, ADDRESS_INFO_PATH, { params });
//   const { total, transactions }: { transactions: ITxsItem[]; total: any } = data.address;
//   const list: ITxsItem[] = transactions.filter((txs: ITxsItem) => txs.confirmations >= 3);
//   const pages: number = Math.ceil(total.transaction_count / params.limit);
//   yield put(receiveList({ page, list, pages }));
// }

export function* nextPageChange() {
  while (true) {
    const prevPage: number = yield select(selectedPageSelector);
    yield take(SELECT_PAGE);
    const nextPage: number = yield select(selectedPageSelector);
    const listByPage: ITxsItem[] = yield select(listByPageSelector);
    if (prevPage !== nextPage && !listByPage[nextPage]) yield fork(fetchAddressInfo, nextPage);
  }
}
