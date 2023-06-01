import React from 'react'
import Product from './Product'
import styles from './Products.module.css'
import { useState } from 'react';
import * as productsService from '../../services/productsService'
import { DetailsPage } from '../../Details/DetailsPage';

function ProductList({
    products,
}) {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const onDetailsClick = async (productId) => {
        const productInfo = await productsService.getOneProduct(productId)

        setSelectedProduct(productInfo);
    }

    const onCloseHandler = () => {
        setSelectedProduct(null);
    }
    return (
        <>
        {selectedProduct && <DetailsPage {...selectedProduct} onCloseHandler={onCloseHandler} />}
        <div className={styles['product-container']}>
            <article className={styles['products']}>
                {products.map(product =>
                    <Product
                        {...product}
                        key={product.id}
                        onDetailsClick={onDetailsClick}
                    />
                )}
            </article>
        </div>
        </>
    )
}

export default ProductList