import { ActionTypes } from "../constants/constant-types";

const initialState = {
    products: []
};

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }; 
        default:
            return state;
    }
};

export const selectProduct = (state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state,...payload };

        case ActionTypes.CLEAR_SELECTED_PRODUCTS:
            return initialState;
        default:
            return state;
    }
}

export default productReducer;
