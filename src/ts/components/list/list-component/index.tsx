import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { ITxs } from "~interfaces";

const TransactionListItem = ({ txid, time, txouts }: any) => {
	const styleTypeTxs = txouts[0]["spent"] ? "loss" : "income";
	const { amount, spent } = txouts[0];
	return (
		<div className="txs-item">
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Paper className="paper txs-item-field">{time}</Paper>
				</Grid>
				<Grid item xs={10}>
					<Paper className="paper txs-item-field">{txid}</Paper>
				</Grid>
				<Grid item xs={2}>
					<Paper className={`paper ${styleTypeTxs} txs-item-field`}>
						{spent ? "- " : "+ "}
						{amount} BTC
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default TransactionListItem;
