import { SET_VALIDATION_ERRORS, REGISTER_SUCCESS, SET_CURRENT_USER } from "../_actions/types";
import isEmpty from "is-empty";

const initialState = {
    validationErrors: {},
    registerSuccess: false,
    isAuth: false,
    user: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_VALIDATION_ERRORS:
            return {...state, validationErrors: action.payload}
        case REGISTER_SUCCESS: 
            return {...state, }
        case SET_CURRENT_USER: 
            return {...state, user: action.payload, isAuth: !isEmpty(action.payload)}
        default :
            return state;
    }
}