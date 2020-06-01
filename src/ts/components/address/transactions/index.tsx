import React from "react";
import { useSelector } from "react-redux";
import { IBalance } from "../../../interfaces/index";
import { addressSelector } from "../../../store/selectors/selectors";

const TransactionsInfo = (): JSX.Element => {
	const balanceInfo: IBalance = useSelector(addressSelector);
	const { transaction_count, output_count, input_count } = balanceInfo.total;;
	return (
		<div className="address-transactions">
			<div className="received">
				<span className="label">Total count</span>
				<p>{transaction_count}</p>
			</div>
			<div className="received">
				<span className="label">Received</span>
				<p>{input_count}</p>
			</div>
			<div className="sent">
				<span className="label">Sent</span>
				<p>{output_count}</p>
			</div>
		</div>
	);
};

export default TransactionsInfo;
