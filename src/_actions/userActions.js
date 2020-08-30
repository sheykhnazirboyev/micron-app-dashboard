import { SET_VALIDATION_ERRORS, REGISTER_SUCCESS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import { userApi } from '../api';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';

export const setValidationErrors = (errors) => dispatch => {
    dispatch({
        type: SET_VALIDATION_ERRORS,
        payload: errors
    })
}

export const registerUser = (data, history, to) => dispatch => {
    axios.post(`${userApi}/register`, data)
        .then(res => {
            history.push(to);
            dispatch(setValidationErrors({}));
            setValidationErrors({})(dispatch)
            return dispatch({
                type: REGISTER_SUCCESS,
                payload: null
            })
        })
        .catch(error => {
            if(error.response){
                switch(error.response.status){
                    case 404: return history.push("/404")
                    case 500: return history.push("/500");
                    case 400: return setValidationErrors(error.response.data)(dispatch)
                    default : return null;
                }
            }
        })
}

export const setCurrentUser = (decoded) => ({
    type: SET_CURRENT_USER,
    payload: decoded
});


export const loginUser = (data, history, to) => dispatch => {
    axios.post(`${userApi}/login`, data)
         .then(res => {
            const token = res.data.token;
            localStorage.setItem("jsonwebtoken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
             history.push(to);
             return setValidationErrors({})(dispatch);
         })
         .catch(error => {
             if(error.response){
                 console.log(error.response)
                 switch(error.response.status){
                     case 404: return history.push("/404")
                     case 500: return history.push("/500")
                     case 400: dispatch(setValidationErrors(error.response.data))
                     default : return null;
                 }
             }
         })
}


export const logOutUser = () => dispatch => {
    localStorage.removeItem("jsonwebtoken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}