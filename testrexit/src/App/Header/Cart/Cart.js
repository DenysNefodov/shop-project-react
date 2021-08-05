import React from 'react'

import "./cart.css"
import products from '../../Main/Products/products'


const productsObject = products.reduce((obj, product) => ({
    ...obj,
    [product.id]:product
}), {})

const Cart = ({
    productsInCart
}) => {
    return (
        <div className="cart text-center">
            {
                Object.keys(productsInCart).map(productId => (
                    <div key={productId}>{productsObject[productId].name}: {productsInCart[productId]}</div>
                ))
            }
		</div>
    )
}

export default Cart