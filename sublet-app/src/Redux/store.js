import { createStore } from 'redux';
import rootReducer from './reducers';
import listingsReducer from "./reducers";

const store = createStore(listingsReducer);

export default store;




