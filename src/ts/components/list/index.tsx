import React from "react";
import { Pagination } from "@material-ui/lab";

import TransactionListItem, { ITxsItem } from "./list-component";

export interface ITxsList {
	onChange: (nextPage: number) => void;
	selectedPage: number;
	txsList: ITxsItem[];
	isFetching: boolean;
	pages: number;
}

const TransactionsList = (props: ITxsList): JSX.Element => {
	const { txsList, pages, selectedPage, onChange } = props;

	return (
		<div className="card-body">
			<div className="list-container">
				{txsList.map((txs: ITxsItem) => (
					<TransactionListItem {...txs} key={txs.txId} />
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
