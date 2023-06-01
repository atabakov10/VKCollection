import styles from './Home.module.css'

export const Home = ({
    products,
}) => {
    return (
        <div className={styles['home-page']}>
            <h1 className={styles['home-text']}>Home Page</h1>
        </div>
    )
}
