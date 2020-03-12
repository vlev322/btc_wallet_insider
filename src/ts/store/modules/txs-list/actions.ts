import actionCreatorFactory from "typescript-fsa";
import { RECEIVE_LIST, REQUEST_LIST, SELECT_PAGE } from "../../../constants/actions";
import { ITxsItem } from "../../../interfaces/index";

const actionCreator = actionCreatorFactory();

export const selectPage = actionCreator<{ page: number }>(SELECT_PAGE);
export const requestList = actionCreator<{ page: number }>(REQUEST_LIST);
export const receiveList = actionCreator<{ page: number; list: ITxsItem[]; pages: number }>(RECEIVE_LIST);
