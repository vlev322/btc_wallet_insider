import actionCreatorFactory from "typescript-fsa";

import { REQUEST_ADDRESS_INFO, RECEIVE_ADDRESS_INFO } from "../../../constants/actions";
import { IAddress } from "../../../interfaces/index";

const actionCreator = actionCreatorFactory();

export const requestAddressInfo = actionCreator<{}>(REQUEST_ADDRESS_INFO);
export const receiveAddressInfo = actionCreator<{ data: IAddress }>(RECEIVE_ADDRESS_INFO);
