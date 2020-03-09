import React from "react";
import { Provider } from "react-redux";

import rootSaga from "../logic/sagas";
import configureStore from "../logic/store/configureStore";

import App from "../components/containers/App";

const store = configureStore();
store.runSaga(rootSaga);

export const IndexComposition = (): JSX.Element => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
