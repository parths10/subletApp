import { createStore } from 'redux';
import rootReducer from './reducers';
import listingsReducer from "./reducers";

const store = createStore(listingsReducer);

export default store;



// import { createStore, applyMiddleware, compose } from 'redux';
// import listingsReducer from './reducers';
//
// // Use the Redux DevTools Extension if available, otherwise use applyMiddleware
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//
// const store = createStore(
//     listingsReducer,
//     composeEnhancers(applyMiddleware())  // No middleware added for now, but this setup allows for future addition
// );
//
// export default store;
