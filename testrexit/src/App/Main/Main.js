import React from 'react'
import { Route } from 'react-router'
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductList from "./Products/ProductList"
import Testimonials from '../../Components/Testimonials/Testimonials'


const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity,
	addLike,
	removeLike,
	productsLikeState
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
						addLike={addLike}
						removeLike={removeLike}
						productsLikeState={productsLikeState}
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
					<Route path="/" exact component={Testimonials}/>
				</div>
				</div>
			</div>
        </main>
	)
}

export default Main