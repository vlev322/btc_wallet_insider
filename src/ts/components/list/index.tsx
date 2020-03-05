import React from "react";
import TransactionListItem, { ITxsItem } from "./list-component";
import Pagination from "./pagination";

interface ITxsList {
	list: ITxsItem[];
	page: number;
	pages: number;
}

const TransactionList = (props: ITxsList): JSX.Element => {
	const { list } = props;
	return (
		<div className="card-body">
			<div className="list-container">
				<TransactionListItem {...list[0]} />
			</div>
			<div className="pagination-container">
				<Pagination {...props} />
			</div>
		</div>
	);
};

export default TransactionList;
