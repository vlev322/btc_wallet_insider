import { IBalanceInfo } from "../../components/address/balance";
// todo: use reselect here
export const selectedPageSelector = (state: { selectedPage: number }) => state.selectedPage;
export const listByPageSelector = (state: { listByPage: [] }) => state.listByPage;

export const dataByAddressSelector = (state: { dataByAddress: { data: IBalanceInfo } }) => state.dataByAddress.data;
