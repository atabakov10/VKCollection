import { Card, Button } from 'react-bootstrap'
import styles from './Products.module.css'
import { NavLink } from 'react-router-dom'

function Product({
  id,
  imageUrl,
  name,
  price,
  onDetailsClick,
}) {
  return (
    <Card className={styles['card-products']}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className={styles['card-body']}>
        <Card.Title className={styles['product']}>{name}</Card.Title>
        <Card.Text className={styles['product']}>${price}</Card.Text>
        <Button><NavLink className={styles['details-link']} to={`/products/${id}`} onClick={() => onDetailsClick(id)}>Details </NavLink></Button>
      </Card.Body>
    </Card>
  )
}

export default Product