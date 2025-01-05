import React from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar_container}>
        <div className={styles.navbar_content}>

        <img className={styles.logo} src='/images/logo.svg' alt='logo'/>
        <ul className={styles.navList}>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        </div>
        </div>
    </>
  )
}

export default Navbar
