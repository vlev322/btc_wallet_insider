import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { selectPage } from "../../logic/actions";

import { IBalanceInfo } from "../addres/balance";
import AddressInfo from "../addres";
import TransactionsList from "../list";

const App = (props: any): JSX.Element => {
	const { data: address } = props.dataByAddres;
	const _onChangePage = (_: any, nextPage: number) => {
		props.dispatch(selectPage(nextPage));
	};

	return (
		<div>
			{props.isFetching ? (
				<div className="loader">
					<CircularProgress disableShrink />
				</div>
			) : (
				<div className="content">
					<AddressInfo {...address} />
					<TransactionsList {...props} onChange={_onChangePage} />
				</div>
			)}
		</div>
	);
};

function mapStateToProps(state: { selectedPage: number; listByPage: []; dataByAddres: IBalanceInfo }) {
	const { selectedPage, listByPage, dataByAddres } = state;
	const { isFetching, txsList, pages } = listByPage[selectedPage] || { isFetching: true, txsList: [], pages: 0 };
	return {
		dataByAddres,
		selectedPage,
		txsList,
		isFetching,
		pages
	};
}
export default connect(mapStateToProps)(App);
