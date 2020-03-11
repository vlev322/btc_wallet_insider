import React from "react";

interface ITxsProps {
	txsCount: number;
	txo: number;
	txi: number;
}

const TransactionsInfo = ({ txsCount, txo, txi }: ITxsProps): JSX.Element => (
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

export default TransactionsInfo;
