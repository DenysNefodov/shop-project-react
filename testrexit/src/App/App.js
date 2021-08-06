import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

class App extends Component {

    state = {
        productsInCart: {

        }
    }

    addProductToCart = (id, count) => {
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [id]:(prevState.productsInCart[id] || 0) + count
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
                    productsInCart={this.state.productsInCart}
                />
                <Footer/>
            </>
        )
    }
}

export default App