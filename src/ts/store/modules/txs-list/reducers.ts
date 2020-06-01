import { SELECT_PAGE, REQUEST_LIST, RECEIVE_LIST } from "../../../constants/actions";
import { ITxssList, ITxsItem } from "../../../interfaces/index";

const DEFAULT_PAGE = 0

export function selectedPage(state: number = DEFAULT_PAGE, action: { type: string; payload: { page: number } }) {
	switch (action.type) {
		case SELECT_PAGE:
			return action.payload.page;
		default:
			return state;
	}
}

function list(state: ITxssList = {}, action: { type: string; payload: { list: ITxsItem[]; pages: number } }) {
	switch (action.type) {
		case REQUEST_LIST:
			return { ...state, isFetching: true };
		case RECEIVE_LIST:
			return {
				...state,
				isFetching: false,
				txsList: action.payload.list,
				pages: action.payload.pages
			};
		default:
			return state;
	}
}

interface IActionListByPage {
	type: string;
	payload: {
		page: number;
		pages: number;
		list: ITxsItem[];
	};
}

export function listByPage(txsList: any = {}, action: any) {
	switch (action.type) {
		case REQUEST_LIST:
		case RECEIVE_LIST:
			return {
				...txsList,
				[action.payload.page]: list(txsList[action.payload.page], action),
				pages: action.payload.pages
			};
		default:
			return txsList;
	}
}
