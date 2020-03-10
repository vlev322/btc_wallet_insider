import { combineReducers } from "redux";

import dataByAddress from "./modules/address-info/reducers";
import { listByPage, selectedPage } from "./modules/txs-list/reducers";

const rootReducer = combineReducers({
	listByPage,
	selectedPage,
	dataByAddress
});

export default rootReducer;
