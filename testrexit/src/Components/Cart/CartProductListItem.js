import React from 'react'

const CartProductListItem = ({
    productCount,
    product

}) => {
    return (
            <div>
                {product.name} : {productCount}
            </div>
    )
}

export default CartProductListItem