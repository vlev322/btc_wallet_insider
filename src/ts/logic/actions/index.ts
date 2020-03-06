export const REQUEST_LIST = "REQUEST_LIST";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const SELECT_PAGE = "SELECT_PAGE";
export const INVALIDATE_PAGE = "INVALIDATE_PAGE";

export function selectPage(page: number) {
	return {
		type: SELECT_PAGE,
		page
	};
}

export function invalidatePage(page: any) {
	return {
		type: INVALIDATE_PAGE,
		page
	};
}

export function requestPosts(page: number) {
	return {
		type: REQUEST_LIST,
		page
	};
}

export function receivePosts(page: number, list: []) {
	return {
		type: RECEIVE_LIST,
		page,
		list,
		receivedAt: new Date().setMilliseconds(0)
	};
}
