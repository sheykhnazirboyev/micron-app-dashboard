import axios from 'axios';
import {
    GET_ALL_PRODUCTS, GET_PRODUCTS_ERR, UPLOAD_PRODUCT, UPLOAD_PRODUCT_ERR, UPDATE_SUCCESS,
    GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_ERR, UPDATE_PRODUCT, UPDATE_PRODUCT_ERR, SEARCH_PRODUCT, CLEAR_SINGLE_PRODUCT, FILE_UPLOAD_LOADER
} from './types';
import { productApi, uploadApi } from '../api';
import { setLoader, hideLoader, toggleSnackBar } from './appActions';

export const getAllProducts = (history) => dispatch => {
    dispatch(setLoader());
    axios.get(productApi)
        .then(res => {
            dispatch(hideLoader());
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(hideLoader());
            if (err.response && err.response.status === 500) {
                return history.push("/500")
            }
        });
}

export const deleteProduct = (id, history) => dispatch => {
    dispatch(setLoader());
    axios.delete(`${productApi}/${id}`)
        .then(res => {
            dispatch(hideLoader());
            dispatch(toggleSnackBar({ status: true, type:"success", msg:"Product successfully uploaded" }))
            return getAllProducts(history)(dispatch);
        } )
        .catch(err => {
            dispatch(hideLoader());
            if (err.response &&  err.response.status === 403) {
                return dispatch(toggleSnackBar({ status: true, type: "error", msg: "You have no access to this action" }))
            }
        })
}

export const fileUpload = (files) => dispatch => {

    let formData = new FormData();
    const config = {
        header: { "content-type": "multipart/form-data" }
    }
    formData.append("file", files[0]);

    return axios.post(`${uploadApi}/product`, formData, config)
}

export const uploadProduct = (data) => dispatch => {
    dispatch(setLoader());
    axios.post(productApi, data)
        .then(res => {
            dispatch(hideLoader());
            dispatch(toggleSnackBar({ status: true, type:"success", msg:"Product successfully uploaded" }))
            dispatch({
                type: UPLOAD_PRODUCT,
                payload: res.data
            });
        } )
        .catch(err => {
            dispatch(hideLoader());
            if (err.response &&  err.response.status === 400) {
                return dispatch({
                    type: UPLOAD_PRODUCT_ERR,
                    payload: err.response.data.errors
                })
            }
            if (err.response &&  err.response.status === 403) {
                return dispatch(toggleSnackBar({ status: true, type: "error", msg: "You have no access to this action" }))
            }
        })
}

export const validationErr = (errors) => dispatch => {
    dispatch({
        type: UPLOAD_PRODUCT_ERR,
        payload: errors
    })
}
export const updateSuccess = (val) => dispatch => {
    dispatch({
        type: UPDATE_SUCCESS,
        payload: val
    })
}

export const getSingleProduct = (id, history) => dispatch => {
    dispatch(setLoader());
    axios.get(`${productApi}/${id}`)
        .then(res => {
            dispatch(hideLoader());
            console.log(res.data)
            dispatch({
                type: GET_SINGLE_PRODUCT,
                payload: res.data
            })
        } )
        .catch(err => {
            dispatch(hideLoader());
            if ( err.response && err.response.status === 404) {
                return history.push("/404")
            }
            if (err.response &&  err.response.status === 500) {
                return history.push("/500")
            }
            console.log(err.response)
            // return dispatch({
            //     type: GET_SINGLE_PRODUCT_ERR,
            //     payload: err
            // })
        })
}

export const clearSingleProduct = (id) => dispatch => {
    dispatch({
        type: CLEAR_SINGLE_PRODUCT,
        payload: null
    })
}

export const updateProduct = (data, id) => dispatch => {
    dispatch(setLoader());
    axios.put(`${productApi}/${id}`, data)
        .then(res => {
            dispatch(hideLoader());
            dispatch(toggleSnackBar({ status: true, type:"success", msg:"Product successfully updated" }))
            return dispatch({
                type: UPDATE_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(hideLoader());
            if (err.response &&  err.response.status === 400) {
                return dispatch({
                    type: UPDATE_PRODUCT_ERR,
                    payload: err.response.data && err.response.data.errors
                })
            }
            if (err.response &&  err.response.status === 403) {
                return dispatch(toggleSnackBar({ status: true, type: "error", msg: "You have no access to this action" }))
            }

        })

}

export const searchProduct = (input) => dispatch => {
    axios.post(`${productApi}/search?search=${input}`)
        .then(res => dispatch({
            type: SEARCH_PRODUCT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PRODUCTS_ERR,
            payload: err
        }));
}

export const toggleFileUploader = (val) => {
    return {
        type: FILE_UPLOAD_LOADER,
        payload: val
    }
}