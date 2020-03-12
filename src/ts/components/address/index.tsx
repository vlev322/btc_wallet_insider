import React from "react";
import { useSelector } from "react-redux";
import { IAddress } from "../../interfaces";
import { addressSelector } from "../../store/selectors/selectors";
import BalanceInfo from "./balance";
import TransactionsInfo from "./transactions";

const AddressInfo = (): JSX.Element => {
	const addressInfo: IAddress = useSelector(addressSelector);
	const { address } = addressInfo;
	return (
		<div className="address card-body">
			<div className="address-header">
				<p className="title">Bitcoin address </p>
				<span>{address}</span>
			</div>
			<div className="address-info">
				<div>
					<p className="sub-title">Balance</p>
					<BalanceInfo />
				</div>
				<div>
					<p className="sub-title">Transactions</p>
					<TransactionsInfo />
				</div>
			</div>
		</div>
	);
};

export default AddressInfo;
