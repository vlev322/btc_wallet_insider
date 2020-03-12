import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ITxsItem } from "../../../interfaces/index";

enum TXS_STYLE_TYPE {
	SPENT = "spent",
	LOSS = "loss",
	INCOME = "income"
}
enum TXS_TYPE {
	SPENT = "- ",
	INCOME = "+ "
}

const TransactionListItem = ({ txid, time, txouts }: ITxsItem) => {
	const styleTypeTxs: TXS_STYLE_TYPE = txouts[0][TXS_STYLE_TYPE.SPENT] ? TXS_STYLE_TYPE.LOSS : TXS_STYLE_TYPE.INCOME;
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
						{spent ? TXS_TYPE.SPENT : TXS_TYPE.INCOME}
						{amount} BTC
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default TransactionListItem;
