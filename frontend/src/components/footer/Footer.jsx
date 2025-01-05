import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <>
     <footer>
     <div className={styles.footer_container}>

     <div className={styles.footer_info}>
     <div className={styles.logo_desc}>

     <img src='/images/logo.svg' alt='logo'/>
     <h1>Reyansh Infosys</h1>
     </div>
     <p>We aim to provide the best platform to learn the skills that are required to get the job in the current market and help individuals to build and succeed in their career.</p>
     </div>
     <div className={styles.quickLinks}>
        <h2>Quick Links</h2>
        <ul className={styles.quickLinks_details}>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Accounting Software</li>
        <li>ERP Software</li>
        </ul>
     </div>
     <div className={styles.contact}>
     <h2>Contact</h2>
     <ul className={styles.contact_lists}>
        <li>
            <img src='/images/phone.svg' alt='phone'/>
            <p>+977- 9824480471</p>
        </li>
        <li>
            <img src='/images/location.svg' alt='location'/>
            <p>+977- 9824480471</p>
        </li>
        <li>
            <img src='/images/email.svg' alt='email'/>
            <p>+977- 9824480471</p>
        </li>
     </ul>
     </div>
     <div className={styles.socials}></div>
     </div>
     </footer> 
    </>
  )
}

export default Footer
