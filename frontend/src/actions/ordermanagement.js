import client from "../utils/http";
import {
    SUBMIT_PURCHASE_ORDER_REQUEST,
    SUBMIT_PURCHASE_ORDER_SUCCESS,
    SUBMIT_PURCHASE_ORDER_FAILURE
} from './types';

// Action Creators
export const submitPurchaseOrder = (formData) => async (dispatch) => {
    dispatch({ type: SUBMIT_PURCHASE_ORDER_REQUEST });

    try {
        const response = await client.post(`/order/purchase`, formData);
        dispatch({ type: SUBMIT_PURCHASE_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SUBMIT_PURCHASE_ORDER_FAILURE, payload: error.message });
    }
};
