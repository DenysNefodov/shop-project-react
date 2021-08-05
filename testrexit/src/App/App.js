import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

class App extends Component {

    state = {
        productsInCart: {
            1:3,
            2:5,
        }
    }

    addProductToCart = (count, price) => {
        this.setState((prevState) => ({
            cartData: {
                count: prevState.cartData.count + count,
                price: prevState.cartData.price + (price*count),
            }
        }))
    }

    render() {
        return (
            <>
                <Header
                    productsInCart={this.state.productsInCart}
                />
                <Main
                    addProductToCart={this.addProductToCart}
                />
                <Footer/>
            </>
        )
    }
}

export default App