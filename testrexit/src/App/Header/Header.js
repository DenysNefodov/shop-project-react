import React from 'react'

import Menu from "./Menu/Menu"
import Logo from "./Logo/Logo"
import Cart from "./Cart/Cart"

import "./header.css"

const Header = ({

	cartData

}) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-row">
			<Logo/>
			<Menu/>
			<Cart
				count={cartData.count}
				price={cartData.price}
			/>
				</div>
			</div>
        </header>
	)
}

export default Header