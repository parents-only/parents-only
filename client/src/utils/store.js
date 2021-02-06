import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";

const composedEnhancer = composeWithDevTools();

const store = createStore(reducer, composedEnhancer);

export default store;