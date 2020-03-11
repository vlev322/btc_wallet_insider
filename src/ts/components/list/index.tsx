import React from "react";
import { Pagination } from "@material-ui/lab";

import TransactionListItem from "./list-component";
// import { ITxs } from "../../interfaces";

export interface ITxsList {
	onChange: (nextPage: number) => void;
	selectedPage: number;
	txsList: any[];
	isFetching: boolean;
	pages: number;
}

const TransactionsList = (props: ITxsList): JSX.Element => {
	const { txsList, pages, selectedPage, onChange } = props;
	return (
		<div className="card-body">
			<div className="list-container">
				{txsList.map((txs: any) => (
					<TransactionListItem {...txs} key={txs.txid} />
				))}
			</div>
			<div className="pagination-container">
				<Pagination
					size="large"
					onChange={onChange}
					color="secondary"
					count={pages}
					page={selectedPage}
					variant="outlined"
					shape="rounded"
				/>
			</div>
		</div>
	);
};

export default TransactionsList;
