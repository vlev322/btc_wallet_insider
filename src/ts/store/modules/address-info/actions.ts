import actionCreatorFactory from "typescript-fsa";

import { REQUEST_ADDRESS_INFO, RECEIVE_ADDRESS_INFO } from "../../../constants/actions";

const actionCreator = actionCreatorFactory();

export const requestAddressInfo = actionCreator<{}>(REQUEST_ADDRESS_INFO);
export const receiveAddressInfo = actionCreator<{ data: {} }>(RECEIVE_ADDRESS_INFO);
