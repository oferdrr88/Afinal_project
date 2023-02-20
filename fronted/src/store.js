import { configureStore } from '@reduxjs/toolkit';
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
// import { legacy_createStore as createStore } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { productsRrducers } from './reducers/productsRrducers';

const reducer = combineReducers({
    products: productsRrducers,
});

let initialState = {};

const middlware = [thunk];
const store = legacy_createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

// const store = configureStore
//     reducer,
//     preLoadedState,
//     middleware,
//   })

export default store;
