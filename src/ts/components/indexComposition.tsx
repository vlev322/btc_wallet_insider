import React from "react";
import AddressInfo from "./addres";
import TransactionsList from "./list";

const testPropsForAddress = {
	address: "mrKQkNc62v7jWsoTWVpcy72kZzE2gjTTGc",
	balance: 190.1234,
	receivedAmount: 190.0433,
	sentAmount: 0.23,
	receivedTxCount: 432,
	sentTxCount: 98,
	invalidTxCount: 11
};
const testPropsForTransactions = {
	list: [
		{
			txId: "a2ff72bd48416139d50d4ad9fe802e29185727a37415a895fbfd49cd0b",
			time: "2020-03-03T20:53:09Z",
			amount: 0.23452,
			type: "sent"
		}
	],
	page: 1,
	pages: 10
};

export const IndexComposition = () => {
	return (
		<div className="content">
			<AddressInfo {...testPropsForAddress} />
			<TransactionsList {...testPropsForTransactions} />
		</div>
	);
};
