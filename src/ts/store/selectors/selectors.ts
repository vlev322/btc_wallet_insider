import { createSelector } from "reselect";
import { IBalance } from "../../interfaces";
// import { IBalance } from "~interfaces";

const dataByAddressSelector = (state: { dataByAddress: { data: IBalance } }) => state.dataByAddress.data;

export const addressSelector = createSelector(
	dataByAddressSelector,
	(dataByAddress: IBalance): IBalance => {
		return dataByAddress;
	}
);


const getList = (state: any) => state.listByPage[state.selectedPage].txsList;

export const listSelector = createSelector(getList, list => list);

export const selectedPageSelector = (state: { selectedPage: number }) => state.selectedPage;
export const listByPageSelector = (state: { listByPage: [] }) => state.listByPage;


