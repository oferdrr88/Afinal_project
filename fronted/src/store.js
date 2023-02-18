import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { productsRrducer } from './reducers/productReducers';

const reducer = combineReducers({
    products: productsRrducer,
});

let initialState = {};

const middlware = [thunk];

const store = legacy_createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;
