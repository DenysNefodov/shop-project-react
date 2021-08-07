import React from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'


const Cart = ({
    productsInCart,
    products
}) => {
    return (
        <div className="cart text-center">
            <CartProductList
                productsInCart={productsInCart}
                products={products}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart