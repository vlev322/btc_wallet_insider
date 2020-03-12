import { Pagination } from "@material-ui/lab";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITxsItem } from "../../interfaces/index";
import { selectPage } from "../../store/modules/txs-list/actions";
import TransactionListItem from "./list-component";
import { listSelector, selectPageSelectorMemo, selectQntPages } from "../../store/selectors/selectors";


const TransactionsList = (): JSX.Element => {
	const txsList: ITxsItem[] = useSelector(listSelector);
	const page = useSelector(selectPageSelectorMemo);
	const pages = useSelector(selectQntPages);

	const dispatch = useDispatch();
	const _onNextPage = useCallback((_, page) => dispatch(selectPage({ page })), [dispatch]);
	return (
		<div className="card-body">
			<div className="list-container">
				{txsList.map((txs: ITxsItem) => (
					<TransactionListItem {...txs} key={txs.txid + txs.txouts} />
				))}
			</div>
			<div className="pagination-container">
				<Pagination
					size="large"
					onChange={_onNextPage}
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
