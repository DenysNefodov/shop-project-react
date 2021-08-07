import React, { Component } from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types';
import Quantity from '../../../Components/Quantity/Quantity';

class ProductListItem extends Component {

    state = {
        productCount:1,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1,
        }))
    }

    render() {
        const {
            id,
            name,
            description,
            type,
            capacity,
            price,
            image,
            addProductToCart,
        } = this.props;
        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">{type}</div>
                <div className="product-capacity">{capacity}GB</div>
                <Quantity
                    productCount={this.state.productCount}
                    onDecrementClick={this.onDecrementClick}
                    onIncrementClick={this.onIncrementClick}
                    minCount={1}
                />
                <div className="product-price">{price}$</div>
                <button className="btn-add-to-cart"
                    onClick={() => addProductToCart(id, this.state.productCount)}
                >Add to cart</button>
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