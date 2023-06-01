import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';

export const NavbarVk = () => {
    return (
        <Navbar bg="dark" variant="dark" className={styles['navbar']}>
            <Container>
                <Nav.Item>
                   <Link to='/'><Image className={styles['images']} src='https://scontent.fsof9-1.fna.fbcdn.net/v/t1.15752-9/326957129_8591534987588327_6372893053855088078_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pLC29-xNhPEAX-st5fz&_nc_ht=scontent.fsof9-1.fna&oh=03_AdQa97w7OZUNhhs819pnQLcGYa4-Z4V9dp8-vd2JYZ4Bzg&oe=6495BFC6' /></Link>
                </Nav.Item>
                <Navbar.Brand><NavLink className={styles['link']} to="/">VK Collection</NavLink></Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className={styles['link']} to="/products">Products</NavLink>
                    <NavLink className={styles['link']} to="/about">About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
