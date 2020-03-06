import { combineReducers } from "redux";
import { SELECT_PAGE, REQUEST_LIST, RECEIVE_LIST } from "../actions";

function selectedPage(state = "reactjs", action: { type: any; page: number }) {
	switch (action.type) {
		case SELECT_PAGE:
			return action.page;
		default:
			return state;
	}
}

function posts(
	state = {
		isFetching: false,
		items: []
	},
	action: { type: any; list: [] }
) {
	switch (action.type) {
		case REQUEST_LIST:
			return { ...state, isFetching: true };

		case RECEIVE_LIST:
			return {
				...state,
				isFetching: false,
				items: action.list
			};
		default:
			return state;
	}
}

function listByPage(state: any = {}, action: any) {
	switch (action.type) {
		case REQUEST_LIST:
		case RECEIVE_LIST:
			return {
				...state,
				[action.reddit]: posts(state[action.reddit], action)
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	listByPage,
	selectedPage
});

export default rootReducer;
