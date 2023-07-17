import {
    SUBMIT_PURCHASE_ORDER_REQUEST,
    SUBMIT_PURCHASE_ORDER_SUCCESS,
    SUBMIT_PURCHASE_ORDER_FAILURE,
} from '../actions/types';

const initialState = {
    loading: false,
    error: null,
    successMessage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SUBMIT_PURCHASE_ORDER_REQUEST:
            return { ...state, loading: true, error: null, successMessage: '' };
        case SUBMIT_PURCHASE_ORDER_SUCCESS:
            return { ...state, loading: false, successMessage: action.payload };
        case SUBMIT_PURCHASE_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

