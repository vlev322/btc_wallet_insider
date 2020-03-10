import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { CircularProgress } from "@material-ui/core";

import { selectPage } from "../../store/modules/txs-list/actions";

import { dataByAddressSelector } from "../../store/selectors/selectors";
import normalizeConvertValue from "../../store/normalizators/satoshiToBtc";
import TransactionsList, { ITxsList } from "../list";
import { ITxsItem } from "../list/list-component";
import { IBalanceInfo } from "../address/balance";
import AddressInfo, { IAddressProps } from "../address";

interface IState {
	dataByAddress: { data: IBalanceInfo };
	listByPage: ITxsList[];
	selectedPage: number;
}

interface IProps {
	dispatch: (action: {}) => void;
	dataByAddress: IAddressProps;
	txsList: ITxsList[];
	selectedPage: number;
	isFetching: boolean;
	page: number;
	pages: number;
}

const App = (props: any): JSX.Element => {
	const _onChangePage = (_: any, page: number) => {
		props.dispatch(selectPage({ page }));
	};
	const { dataByAddress } = props;
	return (
		<div>
			{props.isFetching ? (
				<div className="loader">
					<CircularProgress disableShrink />
				</div>
			) : (
				<div className="content">
					<AddressInfo {...dataByAddress} />
					<TransactionsList {...props} onChange={_onChangePage} />
				</div>
			)}
		</div>
	);
};

const addressSelector = createSelector(
	dataByAddressSelector,
	(dataByAddress: IBalanceInfo): IBalanceInfo => {
		let { balance, receivedAmount, sentAmount } = dataByAddress;
		[balance, receivedAmount, sentAmount] = normalizeConvertValue(balance, receivedAmount, sentAmount);
		return { ...dataByAddress, balance, receivedAmount, sentAmount };
	}
);

const getList = (txsList: ITxsItem[]) => txsList;

const listSelector = createSelector(getList, (list: ITxsItem[]) =>
	list.map((listItem: ITxsItem) => {
		return { ...listItem, amount: normalizeConvertValue(listItem.amount) };
	})
);

function mapStateToProps(state: IState) {
	const { selectedPage, listByPage } = state;
	const { isFetching, txsList, pages } = listByPage[selectedPage] || { isFetching: true, txsList: [], pages: 1 };

	return {
		dataByAddress: addressSelector(state),
		selectedPage,
		isFetching,
		txsList: listSelector(txsList),
		pages
	};
}
export default connect(mapStateToProps)(App);
