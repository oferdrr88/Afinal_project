import { ALL_PRODUCTA_REQUEST, ALL_PRODUCTA_SUCCESS, ALL_PRODUCTA_FAIL, CLEAR_ERRORS } from '../constants/productConstants';

export const productsRrducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTA_REQUEST:
            return {
                loading: true,
                products: [],
            };

        case ALL_PRODUCTA_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
            };

        case ALL_PRODUCTA_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

// export const ALL_PRODUCTA_REQUEST = ' ALL_PRODUCTA_REQUEST';
// export const ALL_PRODUCTA_SUCCESS = 'ALL_PRODUCTA_SUCCESS';
// export const ALL_PRODUCTA_FAIL = 'ALL_PRODUCTA_FAIL';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';