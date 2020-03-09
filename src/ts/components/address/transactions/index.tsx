import React from "react";

interface ITxsProps {
	receivedTxCount: number;
	invalidTxCount: number;
	sentTxCount: number;
}

const TransactionsInfo = ({ receivedTxCount, sentTxCount, invalidTxCount }: ITxsProps): JSX.Element => (
	<div className="address-transactions">
		<div className="received">
			<span className="label">Received</span>
			<p>{receivedTxCount}</p>
		</div>
		<div className="sent">
			<span className="label">Sent</span>
			<p>{sentTxCount}</p>
		</div>
		<div className="ivalid">
			<span className="label">Invalid</span>
			<p>{invalidTxCount}</p>
		</div>
	</div>
);

export default TransactionsInfo;
