import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

export function configureStore() {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
		runSaga: sagaMiddleware.run
	};
}

const store = configureStore();
store.runSaga(rootSaga);

export default store;
