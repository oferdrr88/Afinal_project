import axios from "axios";

import {ALL_PRODUCTA_REQUEST,
    ALL_PRODUCTA_SUCCESS,
    ALL_PRODUCTA_FAIL,
     CLEAR_ERRORS} from '../constants/productConstants'

     export const getProducts =async () =>{

try {
    dispatchEvent({ type:ALL_PRODUCTA_REQUEST})

    const {data} = await axios.get('/api/v1/products')
     dispatchEvent({
        type:ALL_PRODUCTA_SUCCESS,
        payload:data
     })
    
} catch (error) {

    dispatch({
        type:ALL_PRODUCTA_FAIL,
        payload:error.response.data.massage
    })
    
}

     }

     // clear error

     export const CLEAR_ERRORS = ()=>{
        async(disptach)=>{
            dispatch({
                type:CLEAR_ERRORS
                
            })

        }
     }
