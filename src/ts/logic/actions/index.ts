export const REQUEST_ADDRESS_INFO = "REQUEST_ADDRESS_INFO";
export const RECEIVE_ADDRESS_INFO = "RECEIVE_ADDRESS_INFO";

export const REQUEST_LIST = "REQUEST_LIST";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const SELECT_PAGE = "SELECT_PAGE";

export function selectPage(page: number) {
	return {
		type: SELECT_PAGE,
		page
	};
}

export function requestList(page: number) {
	return {
		type: REQUEST_LIST,
		page
	};
}

export function receiveList(page: number, list: [], pages: number) {
	return {
		type: RECEIVE_LIST,
		page,
		list,
		pages
	};
}
export function requestAddressInfo() {
	return {
		type: REQUEST_ADDRESS_INFO
	};
}

export function receiveAddressInfo(data: {}) {
	return {
		type: RECEIVE_ADDRESS_INFO,
		data
	};
}
