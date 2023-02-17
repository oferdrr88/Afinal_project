import  {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import {productsRrducer} from './reducers/productReducers'


const reducer = combineReducers({
      products:productsRrducer


})


let initiaState={}

const moddlware=[thunk]

const store= createStore(reducer,initiaState,composeWithDevTools(applyMiddleware(...moddlware)))


export default store
