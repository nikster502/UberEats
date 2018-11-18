import {combineReducers} from "redux";
import bucket from './bucket';
import products from './products';

export default combineReducers({
    bucket,
    products
})