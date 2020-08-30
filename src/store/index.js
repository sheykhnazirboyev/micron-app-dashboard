import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../_reducers';

console.log = function () {};


export default createStore(rootReducer, applyMiddleware(thunk, logger));