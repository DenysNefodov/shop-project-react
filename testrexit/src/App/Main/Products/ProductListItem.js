import React from 'react'
import "./ProductListItem.css"
import PropTypes from 'prop-types';

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image
}) => {
	return (
        <div className="product-list-item">
            <div className="product-img">
                <img src={image} alt="" />
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">{type}</div>
            <div className="product-capacity">{capacity}</div>
            <div className="product-quantity">
                <button>-</button>
                <input type="text" value="1" readOnly/>
                <button>+</button>
            </div>
            <div className="product-price">{price}$</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
	)
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