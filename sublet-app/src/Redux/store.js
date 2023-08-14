import { createStore } from 'redux';
import listingsReducer from "./reducers";

const store = createStore(listingsReducer);

export default store;




