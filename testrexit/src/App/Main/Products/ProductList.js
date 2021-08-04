import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = () => {
	return (
		<>
            <h1 className="page-title">ProductList</h1>
            <div className="product-list">
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
                <ProductListItem/>
            </div>
        </>
	)
}

export default ProductList