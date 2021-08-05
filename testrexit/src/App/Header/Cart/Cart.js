import React from 'react'

import "./cart.css"

const Cart = ({
    productsInCart


}) => {
    return (
        <div className="cart text-center">
            {
                Object.keys(productsInCart).map(productId => (
                    <div key={productId}>{productId}: {productsInCart[productId]}</div>
                ))
            }
		</div>
    )
}

export default Cart