import {GET_ALL_CATEGORIES, GET_CATEGORIES_ERR, SEARCH_CATEGORY, CLEAR_CATEGORIES} from '../_actions/types';

const initialState = {
    categories: [],
    error: {},
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ALL_CATEGORIES: 
            return {...state, categories: action.payload}
        case CLEAR_CATEGORIES: 
            return {...state, categories:[]}
        case GET_CATEGORIES_ERR: 
            return {...state, error: action.payload}
        case SEARCH_CATEGORY: 
            return { ...state, categories: action.payload }
        default: return state
    }
}