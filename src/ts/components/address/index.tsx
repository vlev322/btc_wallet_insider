import React from "react";
import BalanceInfo from "./balance";
import TransactionsInfo from "./transactions";
import { IAddress } from "../../interfaces";
// import { IAddress } from "~interfaces";

const AddressInfo = (props: IAddress): JSX.Element => {
	const { address } = props;

	return (
		<div className="address card-body">
			<div className="address-header">
				<p className="title">Bitcoin address </p>
				<span>{address}</span>
			</div>
			<div className="address-info">
				<div>
					<p className="sub-title">Balance</p>
					<BalanceInfo {...props} />
				</div>
				<div>
					<p className="sub-title">Transactions</p>
					<TransactionsInfo {...props} />
				</div>
			</div>
		</div>
	);
};

export default AddressInfo;
