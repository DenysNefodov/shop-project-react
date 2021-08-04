import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = () => {
	return (
		<>
            <h1 className="page-title">ProductList</h1>
            <div className="product-list">
                <ProductListItem
                    name="iPhone X"
                    description="This is iPhone X"
                    type="phone"
                    capacity="64 GB"
                    price="1000"
                />
                <ProductListItem
                    name="iPhone XS"
                    description="This is iPhone XS"
                    type="phone"
                    capacity="256 GB"
                    price="1230"
                />
                <ProductListItem
                    name="iPhone XR"
                    description="This is iPhone XR"
                    type="phone"
                    capacity="128 GB"
                    price="1300"
                />
                <ProductListItem
                    name="iPhone 11"
                    description="This is iPhone 11"
                    type="phone"
                    capacity="512 GB"
                    price="1400"
                />
            </div>
        </>
	)
}

export default ProductList