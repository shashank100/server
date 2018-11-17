import { createStore, applyMiddleware } from "redux";
import reducer from "src/client/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "src/client/saga/rootSaga";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);

export default store;
