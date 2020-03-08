import React from "react";
import { Pagination } from "@material-ui/lab";

import TransactionListItem, { ITxsItem } from "./list-component";

interface ITxsList {
	txsList: ITxsItem[];
	selectedPage: number;
	pages: number;
	onChange: (nextPage: number) => void;
}

const TransactionsList = (props: ITxsList): JSX.Element => {
	const { txsList, pages, selectedPage, onChange } = props;

	return (
		<div className="card-body">
			<div className="list-container">
				{txsList.map((
					txs: ITxsItem //confirmations
				) => (
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
