import React from 'react'

import "./cart.css"
import products from '../../Main/Products/products'

const Cart = ({
    productsInCart


}) => {
    return (
        <div className="cart text-center">
            {
                Object.keys(productsInCart).map(productId => (
                    <div key={productId}>{products[productId-1].name}: {productsInCart[productId]}</div>
                ))
            }
		</div>
    )
}

export default Cart