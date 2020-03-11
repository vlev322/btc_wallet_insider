export interface ITxsMeta {
	totalCount: number;
	index: number;
	limit: number;
	results: number;
}
interface ITxouts {
	[index: number]: {
		amount: string;
		spent: boolean;
	};
}
// export interface ITxs {
// 	txid: string;
// 	time: string;
// 	confirmations: number;
// 	txouts: ITxouts;
// }


export interface IAddress{
	totalReceived: number;
	totalSpent: number;
	txsCount: number;
	txi: number;
	txo: number;
	balance: number;
	address: string;
}

export interface IBalance {
	totalReceived: number;
	totalSpent: number;
	balance: number;
}