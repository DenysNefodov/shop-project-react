import React from 'react'
import ProductListItem from './ProductListItem'
import products from './products'

const ProductList = ({
    addProductToCart,
    addLike,
    removeLike,
    productsLikeState
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
                            id={id}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            image={image}
                            addProductToCart={addProductToCart}
                            addLike={addLike}
                            removeLike={removeLike}
                            isLiked={productsLikeState[id]}
                        />
                    ))
                }
            </div>
        </>
	)
}

export default ProductList