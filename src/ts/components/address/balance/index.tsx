import React from "react";
import { IBalance } from "../../../interfaces";

const BalanceInfo = ({ balance, totalReceived, totalSpent }: IBalance): JSX.Element => (
	<div className="address-balance">
		<div className="address-balance-total">
			<span className="label">Total amount</span>
			<p className="accent">{balance} BTC</p>
		</div>
		<div className="address-balance-received">
			<span className="label">Total received</span>
			<p>{totalReceived} BTC</p>
		</div>
		<div className="address-balance-send">
			<span className="label">Total sent</span>
			<p>{totalSpent} BTC</p>
		</div>
	</div>
);

export default BalanceInfo;
