import React from "react";

export interface ITxsItem {
	txId: string;
	date: string;
	amount: number;
	type: string;
}

const TransactionListItem = ({ txId, amount, date }: ITxsItem) => {
	return (
		<div className="txs-item">
			<div className="txs-item-header">{date}</div>
			<div className="txs-item-main">
				<div>{txId}</div>
				<div>{amount}</div>
			</div>
		</div>
	);
};

export default TransactionListItem;
