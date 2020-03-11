import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import TransactionsList, { ITxsList } from "../list";
import AddressInfo from "../address";

import { IAddress } from "../../interfaces/index";
import { selectPage } from "../../store/modules/txs-list/actions";
import { addressSelector, listSelector } from "../../store/selectors/selectors";

interface IState {
	dataByAddress: any;
	listByPage: ITxsList[];
	selectedPage: number;
}

interface IProps {
	dispatch: (action: {}) => void;
	dataByAddress: IAddress;
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

function mapStateToProps(state: IState) {
	const { selectedPage, listByPage } = state;
	const { isFetching, pages }:any = listByPage[selectedPage] || { isFetching: true, txsList: [], pages: 1 };
	return {
		dataByAddress: addressSelector(state),
		txsList: listSelector(state),
		selectedPage,
		isFetching,
		pages
	};
}
export default connect(mapStateToProps)(App);
