import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { isLoading } from "../../store/selectors/selectors";
import AddressInfo from "../address";
import TransactionsList from "../list";

const App = (): JSX.Element => {
	const isFetching: boolean = useSelector(isLoading);
	return (
		<div>
			{isFetching ? (
				<div className="loader">
					<CircularProgress disableShrink />
				</div>
			) : (
				<div className="content">
					<AddressInfo />
					<TransactionsList />
				</div>
			)}
		</div>
	);
};

export default App;
