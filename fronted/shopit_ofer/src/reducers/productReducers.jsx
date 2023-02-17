import {ALL_PRODUCTA_REQUEST,
    ALL_PRODUCTA_SUCCESS,
    ALL_PRODUCTA_FAIL,
     CLEAR_ERRORS} from '../constants/productConstants'


export const productsRrducer =(state={products:[]},action) =>{

    switch(action.type){

case ALL_PRODUCTA_REQUEST:
    return{
        loading:true,
        products:[]
    }

    case ALL_PRODUCTA_SUCCESS:
    return{
        loading:false,
        products:action.payloud.products,
        productsCount:action.payloud.productsCount
    }

    case ALL_PRODUCTA_FAIL:
    return{
        loading:false,
        error:action.payloud
    }

    case CLEAR_ERRORS:
        return{
            ...state,
            error:null
        }




default:
    return  state

    }

}
