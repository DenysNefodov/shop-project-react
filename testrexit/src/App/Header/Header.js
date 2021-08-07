import React from 'react'

import Menu from "./Menu/Menu"
import Logo from "./Logo/Logo"
import Cart from "./Cart/Cart"

import "./header.css"

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-row">
			<Logo/>
			<Menu/>
			<Cart/>
				</div>
			</div>
        </header>
	)
}

export default Header