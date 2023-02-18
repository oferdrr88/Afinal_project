import axios from 'axios';

import { ALL_PRODUCTA_REQUEST, ALL_PRODUCTA_SUCCESS, ALL_PRODUCTA_FAIL, CLEAR_ERRORS } from '../constants/productConstants';

export const getProducts = () => async (disptach) => {
    try {
        disptach({ type: ALL_PRODUCTA_REQUEST });

        const { data } = await axios.get('/api/v1/products');
        disptach({
            type: ALL_PRODUCTA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        disptach({
            type: ALL_PRODUCTA_FAIL,
            payload: error.response.data.massage,
        });
    }
};

// Clear Errors
export const clearErrors = () => async (disptach) => {
    disptach({
        type: CLEAR_ERRORS,
    });
};
