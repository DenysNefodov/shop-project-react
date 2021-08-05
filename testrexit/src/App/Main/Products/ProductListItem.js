import React, { Component } from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types';

class ProductListItem extends Component {

    state = {
        productCount:1,
        color: "green"
    }

    onIncrementClick () {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1,
        }))
    }

    onDecrementClick () {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => {
            if (prevState.color === "red") {
                return {
                    color: "green"
                }
            } else {
                return {
                    color: "red"
                }
            }
        })
    }

    render() {
        const {
            name,
            description,
            type,
            capacity,
            price,
            image
        } = this.props;
        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{name}</div>
                <p>Color:{this.state.color}</p>
                <button
                    onClick={this.changeColor}
                >Change color</button>
                <div className="product-description">{description}</div>
                <div className="product-features">{type}</div>
                <div className="product-capacity">{capacity}</div>
                <div className="product-quantity">
                    <button
                        disabled={this.state.productCount <= 1}
                        onClick={() => this.onDecrementClick()}
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button
                        disabled={this.state.productCount >= 10}
                        onClick={() => this.onIncrementClick()}
                    >+</button>
                </div>
                <div className="product-price">{price}$</div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
}

ProductListItem.defaultProps = {
    description:"No description...",
    image:"/images/noimage.png"
}

export default ProductListItem