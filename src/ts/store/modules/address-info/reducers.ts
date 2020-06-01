import { REQUEST_ADDRESS_INFO, RECEIVE_ADDRESS_INFO } from "../../../constants/actions";
import { IAddress } from "../../../interfaces/index";

function addressData(
  state = {
    data: {},
  },
  action: { type: string; payload: { data: IAddress } }
) {
  switch (action.type) {
    case REQUEST_ADDRESS_INFO:
      return { ...state, isFetching: true };

    case RECEIVE_ADDRESS_INFO:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

function dataByAddress(
  state: { isFetching: boolean; data: any } = {
    isFetching: false,
    data: {
      total: {
        balance: "0",
        balance_int: 0,
        input_count: 0,
        output_count: 0,
        received: "0.0",
        received_int: 0,
        spent: "0.00000000",
        spent_int: 0,
        transaction_count: 0,
      },
      txsCount: 0,
      txi: 0,
      txo: 0,
      address: "XXXXXXXXXXXXXXXX",
    },
  },
  action: {
    type: string;
    payload: {
      data: IAddress;
    };
  }
) {
  switch (action.type) {
    case REQUEST_ADDRESS_INFO:
    case RECEIVE_ADDRESS_INFO:
      return {
        ...state,
        data: { ...addressData(state, action).data },
      };
    default:
      return state;
  }
}

export default dataByAddress;
