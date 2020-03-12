import { REQUEST_ADDRESS_INFO, RECEIVE_ADDRESS_INFO } from "../../../constants/actions";
import { IAddress } from "../../../interfaces/index";

function addressData(
	state = {
		isFetching: false,
		data: {}
	},
	action: { type: string; payload: { data: IAddress } }
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

function dataByAddress(
	state: { isFetching: boolean; data: IAddress } = {
		isFetching: false,
		data: {
			totalReceived: 0,
			totalSpent: 0,
			balance: 0,
			txsCount: 0,
			txi: 0,
			txo: 0,
			address: "XXXXXXXXXXXXXXXX"
		}
	},
	action: { type: string; payload: { data: IAddress } }
) {
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
