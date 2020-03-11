import actionCreatorFactory from "typescript-fsa";

import { SELECT_PAGE, REQUEST_LIST, RECEIVE_LIST } from "../../../constants/actions";
// import { ITxs } from "../../../interfaces";

const actionCreator = actionCreatorFactory();

export const selectPage = actionCreator<{ page: number }>(SELECT_PAGE);
export const requestList = actionCreator<{ page: number }>(REQUEST_LIST);
export const receiveList = actionCreator<{ page: number; list: any; pages: number }>(RECEIVE_LIST);
