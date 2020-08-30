import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, updateProduct, clearSingleProduct } from '../../../_actions/productActions';
import isEmpty  from 'is-empty';
import Alert from '@material-ui/lab/Alert';
import ProductForm from '../ProductForm1';
import { getAllCategories } from '../../../_actions/categoryActions';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';


function ProductEdit({ productId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => state.product.singleProduct);
    const categories = useSelector(state => state.category.categories);
    const error = useSelector(state => state.product.singleProductErr);

    useEffect(() => {
        dispatch(getSingleProduct(productId, history))
        dispatch(getAllCategories(history));

        return () => {
            dispatch(clearSingleProduct(productId))
        }
    }, []);

    const handleSubmit = (data) => {
        dispatch(updateProduct(data, productId))
    }
    
    return (
        <div>
            {
                !isEmpty(error)?
                    <Alert variant="filled" severity="error" >
                        There is some errors please trty gain
                        <Button variant = "primary"> Update</Button>
                    </Alert> :
                <ProductForm 
                    type = "edit"
                    product = {product} 
                    categories = {categories}  
                    header = "Edit Product"
                    handleSubmit = {handleSubmit}
                />    
            }
        </div>
    )
}

export default ProductEdit
