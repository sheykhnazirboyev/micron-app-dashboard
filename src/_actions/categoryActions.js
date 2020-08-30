import axios from 'axios';
import { GET_ALL_CATEGORIES, GET_CATEGORIES_ERR, SEARCH_CATEGORY, CLEAR_CATEGORIES } from './types';
import { categoryApi } from '../api';
import { toggleSnackBar, setLoader, hideLoader } from './appActions';

export const getAllCategories = (history) => dispatch => {
    dispatch(setLoader());
    axios.get(categoryApi)
        .then(res => {
            dispatch(hideLoader());
            
            return dispatch({
                type: GET_ALL_CATEGORIES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(hideLoader());
            if (err.response &&  err.response.status === 500) {
                history.push("/500")
            }
        });
}

export const clearCategories = () => ({
    type: CLEAR_CATEGORIES,
    payload: null
})

export const editCategory = (id, title, history) => dispatch => {
    dispatch(setLoader());
    axios.put(`${categoryApi}/${id}`, { title })
        .then(res => {
            dispatch(toggleSnackBar({ status: true, type:"success", msg:"Category successfully updated" }))
            dispatch(hideLoader());
            return getAllCategories(history)(dispatch)
        }) 
        .catch(err => {
            dispatch(hideLoader());
            if (err.response && err.response.status === 400) {
                dispatch({
                    type: GET_CATEGORIES_ERR,
                    payload: err.response.data
                })
            }
            if (err.response && err.response.status === 403) {
                return dispatch(
                    toggleSnackBar({status:true, type:"error", msg: "You have no access to this action"})
                )
            }
        })
}

export const deleteCategory = (id, history) => dispatch => {
    dispatch(setLoader());
    axios.delete(`${categoryApi}/${id}`)
        .then(res => {
            dispatch(hideLoader());
            dispatch(getAllCategories(history))
            dispatch(toggleSnackBar({ status: true, type:"success", msg:"Category successfully deleted" }))
        } )
        .catch(err => {
            dispatch(hideLoader());
            if (err.response && err.response.status === 403) {
                return dispatch(toggleSnackBar({status:true, type:"error", msg: "You have no access to this action"}))
            }
        })
}

export const createCategory = (title) => dispatch => {
    dispatch(setLoader());
    axios.post(categoryApi, { title })
        .then(res => {
            dispatch(hideLoader());
            dispatch(toggleSnackBar({ status: true, type:"success", msg:"Category successfully created" }))
            return dispatch(getAllCategories())
        } )
        .catch(err => {
            console.log(err.response)
            dispatch(hideLoader());
            if (err.response && err.response.status === 403) {
                return dispatch(toggleSnackBar({status:true, type:"error", msg: "You have no access to this action"}))
            }
        });

}

export const searchCategory = (val) => dispatch => {
    axios.post(`${categoryApi}/search?search=${val}`)
        .then(res => dispatch({
            type: SEARCH_CATEGORY,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
            return dispatch({
                type: GET_CATEGORIES_ERR,
                payload: err
            })
        }
        );
}
