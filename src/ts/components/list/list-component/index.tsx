import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { normalizeConvertValue } from "../../../logic/normalizeConvert";

export interface ITxsItem {
	txId: string;
	time: string;
	amount: number;
	type: string;
}

const TransactionListItem = ({ txId, amount, time, type }: ITxsItem) => {
	[amount] = normalizeConvertValue(amount);

	const styleTypeTxs = type === "sent" ? "loss" : "income";
	return (
		<div className="txs-item">
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Paper className="paper txs-item-field">{time}</Paper>
				</Grid>
				<Grid item xs={10}>
					<Paper className="paper txs-item-field">{txId}</Paper>
				</Grid>
				<Grid item xs={2}>
					<Paper className={`paper ${styleTypeTxs} txs-item-field`}>
						{type === "sent" ? "- " : "+ "}
						{amount} BTC
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default TransactionListItem;
