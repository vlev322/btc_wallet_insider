import { REQUEST_ADDRESS_INFO, RECEIVE_ADDRESS_INFO } from "../../../constants/actions";
// todo: refactor relative import using babel module resolver or ts alias

function addressData(
	state = {
		isFetching: false,
		data: {}
	},
	action: { type: string; payload: { data: {}; }; }
) {
	switch (action.type) {
		case REQUEST_ADDRESS_INFO:
			return { ...state, isFetching: true };

		case RECEIVE_ADDRESS_INFO:
			return {
				...state,
				isFetching: false,
				data: action.payload.data
			};
		default:
			return state;
	}
}

function dataByAddress(state: { isFetching: boolean; data: {}; } | undefined, action: any) {
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

export default dataByAddress;
