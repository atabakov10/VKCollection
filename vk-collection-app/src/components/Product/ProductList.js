import React from 'react'
import Product from './Product'
import styles from './Products.module.css'

function ProductList({
    products,
}) {


    return (
        <div className={styles['product-container']}>
            <article className={styles['products']}>
                {products.map(product =>
                    <Product
                        {...product}
                        key={product.id}
                    />
                )}
            </article>
        </div>
    )
}

export default ProductList