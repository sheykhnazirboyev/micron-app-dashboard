import React from 'react'
import Dashboard from '../../Components/_Admin/Layouts';
import ProductForm from "../../Components/_Admin/ProductForm";

function ProductCreate() {
    return (
        <div>
            <Dashboard>
                <ProductForm type = "create" />
            </Dashboard>
        </div>
    )
}

export default ProductCreate;
