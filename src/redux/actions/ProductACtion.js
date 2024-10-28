import { ActionTypes } from "../constants/constant-types"

 const setProducts = (product)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product
    }
}

export const selectedProduct = (product)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeselectedProduct = ()=>{
    return {
        type: ActionTypes.CLEAR_SELECTED_PRODUCTS,
    }
}

export default setProducts;