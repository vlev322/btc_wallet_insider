import { IBalanceInfo } from "../../components/address/balance";

export const selectedPageSelector = (state: { selectedPage: number }) => state.selectedPage;
export const listByPageSelector = (state: { listByPage: [] }) => state.listByPage;

export const dataByAddressSelector = (state: { dataByAddress: { data: IBalanceInfo } }) => state.dataByAddress.data;
