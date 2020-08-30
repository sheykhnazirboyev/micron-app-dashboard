import {GET_ALL_PRODUCTS, GET_PRODUCTS_ERR, UPLOAD_PRODUCT, UPLOAD_PRODUCT_ERR, UPDATE_SUCCESS,
     GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_ERR, UPDATE_PRODUCT, UPDATE_PRODUCT_ERR, SEARCH_PRODUCT, CLEAR_SINGLE_PRODUCT, FILE_UPLOAD_LOADER} from '../_actions/types';
const initialState = {
    products: [],
    error:{},
    uploadProductErr: {},
    upload_success: false,
    singleProduct: {},
    singleProductErr: {},
    errors: {},
    fileUploading: false,
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_ALL_PRODUCTS: 
            return {...state, products: action.payload }
        case GET_PRODUCTS_ERR:
                return {...state, error: action.payload}
        case UPLOAD_PRODUCT:
                return {...state, upload_success: true}
        case UPLOAD_PRODUCT_ERR:
            return {...state, uploadProductErr: action.payload}
        case FILE_UPLOAD_LOADER: 
            return {...state, fileUploading: action.payload}
        case UPDATE_SUCCESS: {
            return {...state, upload_success: action.payload}
        }
        case GET_SINGLE_PRODUCT :
            return {...state, singleProduct: action.payload}
        case CLEAR_SINGLE_PRODUCT: 
            return {...state, singleProduct : {}}
        case GET_SINGLE_PRODUCT_ERR: {
            return {...state, singleProductErr: action.payload}
        }
        case UPDATE_PRODUCT: 
            return {...state, upload_success: true}
        case UPDATE_PRODUCT_ERR: 
            return {...state, uploadProductErr: action.payload}
        case SEARCH_PRODUCT:
            return {...state, products: action.payload }
        default :
            return {...state}
    }
}