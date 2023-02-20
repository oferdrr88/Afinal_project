import axios from 'axios';

import { ALL_PRODUCTA_REQUEST, ALL_PRODUCTA_SUCCESS, ALL_PRODUCTA_FAIL, CLEAR_ERRORS } from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTA_REQUEST });

        const { data } = await axios.get('/api/v1/products');
        dispatch({
            type: ALL_PRODUCTA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTA_FAIL,
            payload: error.response.data.massage,
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};

// export const ALL_PRODUCTA_REQUEST = ' ALL_PRODUCTA_REQUEST';
// export const ALL_PRODUCTA_SUCCESS = 'ALL_PRODUCTA_SUCCESS';
// export const ALL_PRODUCTA_FAIL = 'ALL_PRODUCTA_FAIL';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';
