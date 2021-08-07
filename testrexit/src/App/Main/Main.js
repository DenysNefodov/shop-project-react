import React from 'react'
import { Route } from 'react-router'
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductList from "./Products/ProductList"
import Testimonials from '../../Components/Testimonials/Testimonials'


const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="row-main">
				<div className="aside">
					Filter
				</div>
				<div className="main-content">
					<Route path="/" exact component={ProductList}/>
					<Route path="/cart" component={CartPage}/>
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