import React from 'react'
import {keys} from "lodash"
import { getProductsObject } from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    products,
    productsInCart,
    productsObject=getProductsObject(products),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity
}) => {
    if(products.length === 0) {
        return null;
    } else {
        return (
            <div>
                {
                    keys(productsInCart).map(productId => (
                        <CartItem
                            key={productId}
                            product={productsObject[productId]}
                            productCount={productsInCart[productId]}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    ))
                }
            </div>
        )
    }


}

export default CartProductList
