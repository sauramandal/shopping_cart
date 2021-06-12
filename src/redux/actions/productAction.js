import { SELECTED_PRODUCT, SET_PRODUCTS } from "../constants/action-types"

export const setProducts = products => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const setProduct = product => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

