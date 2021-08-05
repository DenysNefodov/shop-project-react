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

    addProductToCart = (id, count) => {
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [id]:prevState.productsInCart[id] + count
            }
        }))
    }

    render() {
        return (
            <>
                <Header
                    productsInCart={this.state.productsInCart}
                />
                <button onClick={() => this.addProductToCart(2,5)}>Add to cart</button>
                <Main
                    addProductToCart={this.addProductToCart}
                />
                <Footer/>
            </>
        )
    }
}

export default App