import React from "react";
import { useSelector } from "react-redux";
import { ITxssInfo } from "../../../interfaces/index";
import { addressSelector } from "../../../store/selectors/selectors";

const TransactionsInfo = (): JSX.Element => {
	const txsList: ITxssInfo = useSelector(addressSelector);
	const { txsCount, txo, txi } = txsList;
	return (
		<div className="address-transactions">
			<div className="received">
				<span className="label">Total count</span>
				<p>{txsCount}</p>
			</div>
			<div className="received">
				<span className="label">Received</span>
				<p>{txo}</p>
			</div>
			<div className="sent">
				<span className="label">Sent</span>
				<p>{txi}</p>
			</div>
		</div>
	);
};

export default TransactionsInfo;
