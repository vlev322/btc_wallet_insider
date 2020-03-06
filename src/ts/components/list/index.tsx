import React from "react";
import { Pagination } from "@material-ui/lab";

import TransactionListItem, { ITxsItem } from "./list-component";

interface ITxsList {
	list: ITxsItem[];
	page: number;
	pages: number;
}

const TransactionsList = (props: ITxsList): JSX.Element => {
	const { list, pages, page } = props;
	const _onChange = (_: any, page: any) => {
		console.log(page);
	};
	return (
		<div className="card-body">
			<div className="list-container">
				{list.map(txs => (
					<TransactionListItem {...txs} />
				))}
			</div>
			<div className="pagination-container">
				<Pagination
					size="large"
					onChange={_onChange}
					color="secondary"
					count={pages}
					page={page}
					variant="outlined"
					shape="rounded"
				/>
			</div>
		</div>
	);
};

export default TransactionsList;
