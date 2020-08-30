import React from 'react'
import Dashboard from '../../Components/_Admin/Layouts';
import ProductEditComp from '../../Components/_Admin/ProductEdit';



function ProductEdit(props) {
    
    const productId = props.match.params.id;
    return (
        <div>
            <Dashboard>
                <ProductEditComp productId={productId} />
            </Dashboard>
        </div>
    )
}

export default ProductEdit;
