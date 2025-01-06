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
    
    <div className={styles.footer_quick_wrapper}>

   
     <div className={styles.footer_quick}>
        <h2>Quick Links</h2>
        <ul className={styles.quickLinks_details}>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Accounting Software</li>
        <li>ERP Software</li>
        </ul>
     </div>
     <div className={styles.footer_quick}>
     <h2>Contact</h2>
     <ul className={styles.quickLinks_details}>
        <li>
        <a href='tel:+977-9824480471'>
          
            <img src='/images/phone.svg' alt='phone'/>
            <p>+977- 9824480471</p>
        </a>
        </li>
        <li>
        <a href='tel:+977-9824480471'>
            <img src='/images/location.svg' alt='location'/>
            <p>+977- 9824480471</p>
            </a>
        </li>
        <li>
        <a href='mailto:reyanshinfosys2019@gmail.com'>

            <img src='/images/email.svg' alt='email'/>
            <p>reyanshinfosys2019@gmail.com</p>
        </a>
        </li>
     </ul>
     </div>
     <div className={styles.footer_quick}>
      <h2>Socials</h2>
      <ul className={styles.quickLinks_details}>
        <li>
        <a href='https://www.facebook.com/reyanshbutwal' target='_blank'>

          <img src='/images/fb.svg' alt='facebook'/>
          <p>Facebook</p>
        </a>
        </li>
        <li>
        <a href='https://instagram.com' target='_blank'>

          <img src='/images/instagram.svg' alt='instagram'/>
          <p>Instagram</p>
        </a>
        </li>
        <li>
        <a href='https://linkedin.com' target='_blank'>

          <img src='/images/linkedIn.svg' alt='LinkenIn'/>
          <p>LinkedIn</p>
        </a>
        </li>
      </ul>
     </div>
     </div>
     </div>
     <div className={styles.hr}></div>
     </footer> 
    </>
  )
}

export default Footer
