import { ActionTypes } from "../constants/action-types";

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};

export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
  };