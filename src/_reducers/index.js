import {combineReducers} from 'redux';
import app from './appReducer';
import category from './categoryReducer';
import product from './productReducer';
import user from './userReducer';

export default combineReducers({
    app,
    category,
    product,
    user
});