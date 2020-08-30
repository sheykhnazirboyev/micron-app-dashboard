import React from 'react'
import Dashboard from '../../Components/_Admin/Layouts';

import ProductShowComp from '../../Components/_Admin/ProductShow';

function ProductShow(props) {
    const productId = props.match.params.id;
    
    return (
        <div>
            <Dashboard>
                <ProductShowComp  productId = {productId} />
            </Dashboard>
        </div>
    )
}

export default ProductShow
