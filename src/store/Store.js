import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers/Main.js";

let store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
