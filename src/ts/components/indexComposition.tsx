import { Provider } from "react-redux";
import React from "react";

import store from "../store";

import App from "./containers/App";

export const IndexComposition = (): JSX.Element => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
