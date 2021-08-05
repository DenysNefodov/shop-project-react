import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

class App extends Component {

    state = {
        cartData: {
            count: 0,
            price: 0
        }
    }

    render() {
        return (
            <>
                <Header
                    cartData={this.state.cartData}
                />
                <Main/>
                <Footer/>
            </>
        )
    }
}

export default App