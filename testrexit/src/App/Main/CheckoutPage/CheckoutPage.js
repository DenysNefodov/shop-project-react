import React, { Component } from 'react'
import axios from 'axios'

class CheckoutPage extends Component {
    state = {
        name:"",
        address:"",
        isOrderSave:false,
    }

    orderName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    orderAddress = (e) => {
        this.setState({
            address:e.target.value
        })
    }

    sendForm = (e) => {
        e.preventDefault();
        axios.post("https://my-json-server.typicode.com/kznkv-skillup/server/orders", {
            name:this.state.name,
            address:this.state.address
        })
        .then(res => res.data)
        .then(({name, address}) => this.setState({
            name:name,
            address:address,
            isOrderSave:true
        }))
    }

    renderMessage = () => {
        return (
            <div>
                Dear {this.state.name}, thanks for you order! <br/>
                Address: {this.state.address}
            </div>
        )
    }


    renderForm = () => {
        return (
            <form onSubmit={this.sendForm}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.value}
                        onChange={this.orderName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={this.state.value}
                        onChange={this.orderAddress}
                    />
                </div>
                <button type="submit">Send</button>

            </form>
        )
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1 className="page-title">Checkout Page</h1>
                {this.state.isOrderSave !== true ? this.renderForm() : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage