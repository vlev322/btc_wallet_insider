import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: 'https://api.bitaps.com/btc/testnet/v1/blockchain/address/'
});