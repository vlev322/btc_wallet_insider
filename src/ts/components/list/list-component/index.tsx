import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ITxsItem } from "../../../interfaces/index";

enum TXS_STYLE_TYPE {
  UNCONFIRMED = "unconfirmed",
  SPENT = "spent",
  LOSS = "loss",
  INCOME = "income",
}
enum TXS_TYPE {
  SPENT = "- ",
  INCOME = "+ ",
}
export function toISODate(milliseconds: number) {
  const a = new Date(milliseconds * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${a.getDate()} ${
    months[a.getMonth()]
  } ${a.getFullYear()} ${a.getHours()} ${a.getMinutes()} ${a.getSeconds()}`;
}

const TransactionListItem = ({ txid, time, input_count, output_amount, input_amount }: ITxsItem) => {
  const styleTypeTxs: TXS_STYLE_TYPE = (output_amount && TXS_STYLE_TYPE.INCOME) || TXS_STYLE_TYPE.LOSS;
  return (
    <div className="txs-item">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className="paper txs-item-field">{toISODate(time)}</Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className="paper txs-item-field">{txid}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={`paper ${styleTypeTxs} txs-item-field`}>
            {input_count ? TXS_TYPE.SPENT : TXS_TYPE.INCOME}
            {Boolean(output_amount) ? output_amount : input_amount} BTC
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TransactionListItem;
