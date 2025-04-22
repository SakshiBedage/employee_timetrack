import { createStore, combineReducers } from "redux";
import clockReducer from "./reducers";

const rootReducer = combineReducers({
  clock: clockReducer,
});

const store = createStore(rootReducer);

export default store;
