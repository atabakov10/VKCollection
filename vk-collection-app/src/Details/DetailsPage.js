import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as productsService from '../services/productsService';
import styles from './Details.module.css'

export const DetailsPage = () => {
  const { productId } = useParams();

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const productInfo = await productsService.getOneProduct(productId);
      console.log(productInfo);
      setSelectedProduct(productInfo)
    }
    fetchData()
  }, [productId])

  return (
    <>
      {selectedProduct && (
        <article className={styles['details-article']}>
          <section className={`${styles['details-section']} ${styles['container']}`}>
            <div className={styles['image-container']}>
              <img
                className={styles['small-image']}
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
              />
            </div>
            <h2>{selectedProduct.name} - {selectedProduct.price}$</h2>
            <div className={styles['desc-container']}>
              <h3 className={styles['header-desc']}>
                Description:
              </h3>
              <span className={styles['desc-details']}>
                {selectedProduct.description}
              </span>
            </div>
            <div className={styles['category-container']}>
              <h3>Category</h3>
              <span className={styles['category-details']}>
                {selectedProduct.categoryName}
              </span>
            </div>
          </section>
        </article>
      )}
    </>

  )
}
