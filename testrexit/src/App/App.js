import React, { Component } from 'react'
import {omit} from "lodash"

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

class App extends Component {

    state = {
        productsInCart: {
            1:1,
        },
        productsLikeState: {
            1:true,
            2:true
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

    removeProductFromCart = (productsId) => {
        this.setState((prevState) => ({
            productsInCart:omit(prevState.productsInCart, [productsId])
        }))
    }

    changeProductQuantity = (productsId, quantity) => {
        this.setState((prevState) => ({
            productsInCart:{
                ...prevState.productsInCart,
                [productsId]:quantity
            }
        }))
    }

    addLike = (productId) => {
        this.setState(prevState => ({
            productsLikeState:{
                ...prevState.productsLikeState,
                [productId]: true
            }
        }))
    }

    removeLike = (productId) => {
        this.setState(prevState => ({
            productsLikeState:{
                ...prevState.productsLikeState,
                [productId]: false
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
                    removeProductFromCart={this.removeProductFromCart}
                    changeProductQuantity={this.changeProductQuantity}
                    addLike={this.addLike}
                    removeLike={this.removeLike}
                    productsLikeState={this.state.productsLikeState}
                />
                <Footer/>
            </>
        )
    }
}

export default App