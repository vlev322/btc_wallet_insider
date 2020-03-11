import axios from "axios";

const CROSS = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://api.cryptoapis.io/v1/bc/btc/testnet/address/";

export const API_KEY = {
	"X-API-Key": "078bbf2caca3b8899c9f1879af811fbcdbb16eac"
};

export const instanceAxios = axios.create({
	baseURL: CROSS + BASE_URL,
	headers: {
		...API_KEY
	}
});
