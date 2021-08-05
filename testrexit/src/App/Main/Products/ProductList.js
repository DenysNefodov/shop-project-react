import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = ({
    addProductToCart
}) => {
	return (
		<>
            <h1 className="page-title">ProductList</h1>
            <div className="product-list">
                {
                    products.map(({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }
                    ) => (
                            <ProductListItem
                            key={id}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            image={image}
                            addProductToCart={addProductToCart}
                        />
                    ))
                }
            </div>
        </>
	)
}

export default ProductList