export interface IBalance {
  total: {
    balance: string;
    balance_int: number;
    input_count: number;
    output_count: number;
    received: string;
    received_int: number;
    spent: string;
    spent_int: number;
    transaction_count: number;
  };
}

export interface IAddress extends IBalance {
  transaction_paging: any;
  address: string;
}
export interface IReceivedData {
  data: { address: IAddress };
}
export interface ITxsItem {
  txid: string;
  time: number;
  input_count: number;
  output_amount: number;
  input_amount: number;
  confirmations: number;
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
