// todo: refactor relative import using babel module resolver or ts alias
// todo remove selectors from here

import { SELECT_PAGE, REQUEST_LIST, RECEIVE_LIST } from "../../../constants/actions";

export function selectedPage(state = 1, action: { type: string; payload: { page: number } }) {
	switch (action.type) {
		case SELECT_PAGE:
			return action.payload.page;
		default:
			return state;
	}
}

function list(
	state = {
		isFetching: false,
		txsList: [],
		pages: 0
	},
	action: { type: string; payload: { list: []; pages: number } }
) {
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

export function listByPage(state: any = {}, action: any) {
	switch (action.type) {
		case REQUEST_LIST:
		case RECEIVE_LIST:
			return {
				...state,
				[action.payload.page]: list(state[action.payload.page], action),
				pages: action.payload.pages
			};
		default:
			return state;
	}
}
