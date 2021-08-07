import React from 'react'
import { Route } from 'react-router'
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductList from "./Products/ProductList"
import ProductPage from './ProductPage/ProductPage'

const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity
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
						/>
					)}  />
					<Route path="/cart" render={() => (
							<CartPage
								productsInCart={productsInCart}
								removeProductFromCart={removeProductFromCart}
								changeProductQuantity={changeProductQuantity}
							/>
						)}
					/>
					<Route path="/payment" component={PaymentPage}/>
					<Route path="/shipping" component={ShippingPage}/>
					<Route path="/products/:id" component={ProductPage}/>
				</div>
				</div>
			</div>
        </main>
	)
}

export default Main