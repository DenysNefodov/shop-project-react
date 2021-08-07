import React from 'react'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductList from "./Products/ProductList"
import Testimonials from '../../Components/Testimonials/Testimonials'
import CheckoutPage from './CheckoutPage/CheckoutPage'


const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity,
	products
}) => {
	return (
		<main className="main">
			<div className="container">
				<div className="row-main">
				<div className="aside">
					Filter
				</div>
				<div className="main-content">
					<Route path="/" exact render={() => (
						<ProductList
						addProductToCart={addProductToCart}
						products={products}
						/>
					)}  />
					<Route path="/cart" render={() => (
							<CartPage
								productsInCart={productsInCart}
								removeProductFromCart={removeProductFromCart}
								changeProductQuantity={changeProductQuantity}
								products={products}
							/>
						)}
					/>
					<Route path="/payment" component={PaymentPage}/>
					<Route path="/shipping" component={ShippingPage}/>
					<Route path="/" exact component={Testimonials}/>
					<Route path="/checkout" component={CheckoutPage}/>
				</div>
				</div>
			</div>
        </main>
	)
}

export default Main