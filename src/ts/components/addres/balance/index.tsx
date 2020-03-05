import React from "react";

interface IBalanceInfo {
	balance: number;
	receivedAmount: number;
	sentAmount: number;
}

const BalanceInfo = ({ balance, receivedAmount, sentAmount }: IBalanceInfo): JSX.Element => {
	return (
		<div className="address-balance">
			<div className="address-balance-total">
				<span className="label">Total amount</span>
				<p className="accent">{balance} BTC</p>
			</div>
			<div className="address-balance-received">
				<span className="label">Total received</span>
				<p>{receivedAmount} BTC</p>
			</div>
			<div className="address-balance-send">
				<span className="label">Total sent</span>
				<p>{sentAmount} BTC</p>
			</div>
		</div>
	);
};

export default BalanceInfo;
