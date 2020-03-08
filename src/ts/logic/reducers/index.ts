import { combineReducers } from "redux";
import { SELECT_PAGE, REQUEST_LIST, RECEIVE_LIST, RECEIVE_ADDRESS_INFO, REQUEST_ADDRESS_INFO } from "../actions";

function selectedPage(state = 1, action: { type: string; page: number }) {
	switch (action.type) {
		case SELECT_PAGE:
			return action.page;
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
	action: { type: string; list: []; pages: number }
) {
	switch (action.type) {
		case REQUEST_LIST:
			return { ...state, isFetching: true };

		case RECEIVE_LIST:
			return {
				...state,
				isFetching: false,
				txsList: action.list,
				pages: action.pages
			};
		default:
			return state;
	}
}

function addressData(
	state = {
		isFetching: false,
		data: {}
	},
	action: { type: string; data: {} }
) {
	switch (action.type) {
		case REQUEST_ADDRESS_INFO:
			return { ...state, isFetching: true };

		case RECEIVE_ADDRESS_INFO:
			return {
				...state,
				isFetching: false,
				data: action.data
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
				[action.page]: list(state[action.page], action),
				pages: action.pages
			};
		default:
			return state;
	}
}

function dataByAddres(state: any = {}, action: { type: string; data: {} }) {
	switch (action.type) {
		case REQUEST_ADDRESS_INFO:
		case RECEIVE_ADDRESS_INFO:
			return {
				...state,
				data: { ...addressData(state, action).data }
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	listByPage,
	selectedPage,
	dataByAddres
});

export default rootReducer;
