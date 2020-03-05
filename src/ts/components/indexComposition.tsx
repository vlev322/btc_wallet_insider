import React from "react";
import AddressInfo from "./addres";

export const IndexComposition = () => {
	const testPropsForAddress = {
		address: "mrKQkNc62v7jWsoTWVpcy72kZzE2gjTTGc",
		balance: 190.1234,
		receivedAmount: 190.0433,
		sentAmount: 0.23,
		receivedTxCount: 432,
		sentTxCount: 98,
		invalidTxCount: 11
	};
	return (
		<div className="content">
			<AddressInfo {...testPropsForAddress} />
			{/* <TransactionsList {...testPropsForTransactions}/> */}
		</div>
	);
};
