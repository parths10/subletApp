import { createStore } from 'redux';
import listingsReducer from "./reducers";

// stores the state using listingReducer
const store = createStore(listingsReducer);

export default store;




