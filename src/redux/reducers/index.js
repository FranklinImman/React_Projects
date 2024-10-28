import {combineReducers} from 'redux'
import productReducer, { selectProduct } from './productReducer'


const reducer = combineReducers({
    allproduct: productReducer,
    product: selectProduct,
})

export default reducer;