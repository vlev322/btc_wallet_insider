export interface IBalance {
	totalReceived: number;
	totalSpent: number;
	balance: number;
}

export interface ITxssInfo {
	txsCount: number;
	txi: number;
	txo: number;
}
export interface IAddress extends IBalance, ITxssInfo {
	address: string;
}
export interface IReceivedData {
	data: { payload: IAddress };
}
interface ITxouts {
	[index: number]: {
		amount: string;
		spent: boolean;
	};
}
export interface ITxsItem {
	txid: string;
	time: string;
	confirmations: number;
	txouts: ITxouts;
}
export interface IDataByAddress {
	isFetching: boolean;
	data: IAddress;
}

export interface ITxssList {
	[index: number]: {
		pages: number;
		isFetching: boolean;
		txsList: ITxsItem[];
	};
}

export interface IState {
	listByPage: ITxssList;
	selectedPage: number;
	dataByAddress: IDataByAddress;
}

export interface ITxsMeta {
	totalCount: number;
	index: number;
	limit: number;
	results: number;
}
