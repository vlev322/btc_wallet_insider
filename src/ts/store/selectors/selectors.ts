import { createSelector } from "reselect";
import { IAddress, IState, ITxsItem, ITxssList } from "../../interfaces";

const dataByAddrSelector = (state: IState): IAddress => state.dataByAddress.data;
export const addressSelector = createSelector(dataByAddrSelector, (dataByAddress: IAddress): IAddress => dataByAddress);

const getList = (state: IState): ITxsItem[] => state.listByPage[state.selectedPage].txsList;
export const listSelector = createSelector(getList, (list: ITxsItem[]): ITxsItem[] => list);

const getListInfo = (state: IState) => state;
export const listInfoSelector = createSelector(getListInfo, data => data);

export const selectedPageSelector = (state: IState): number => state.selectedPage;
export const selectPageSelectorMemo = createSelector(selectedPageSelector, (page: number): number => page);

export const qntPagesSelector = (state: IState): number => {
	const selectedPage = selectedPageSelector(state);
	return state.listByPage[selectedPage].pages;
};
export const selectQntPages = createSelector(qntPagesSelector, (pages: number): number => pages);

export const isFetchingSelector = (state: IState): boolean => {
	const selectedPage = selectedPageSelector(state);
	return state.listByPage[selectedPage].isFetching;
};
export const isLoading = createSelector(isFetchingSelector, (isFetching: boolean): boolean => isFetching);

export const listByPageSelector = (state: IState): ITxssList => state.listByPage;
