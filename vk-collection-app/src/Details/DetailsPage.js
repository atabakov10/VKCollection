import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as productsService from '../services/productsService';
import styles from './Details.module.css'
import { ThreeDots } from 'react-loader-spinner';

export const DetailsPage = () => {
  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const productInfo = await productsService.getOneProduct(productId);
      setSelectedProduct(productInfo)
      setIsLoading(false);
    }
    fetchData()
  }, [productId])

  return (
    <>
      {isLoading && <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />}
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
            <div className={styles['name-price']}>
              <h2>{selectedProduct.name} - {selectedProduct.price}$</h2>
            </div>
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
