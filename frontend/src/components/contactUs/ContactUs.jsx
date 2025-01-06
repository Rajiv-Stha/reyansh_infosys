import React from 'react'
import styles from "./contactUs.module.css"
import ContactUsForm from '../contactusForm/ContactUsForm'

const ContactUs = () => {
  return (
    <>
    <div className={styles.contactUs_container}>
    <div className={styles.contactUs_content}>
     <div className={styles.contactUs_text}>
    
          
            <div className={styles.contactUs_heading}>
                <div className={styles.heading_design}></div>
                <h1>Contact Us</h1>
            </div>

            </div>
            <div className={styles.contactUs_wrapper}>
                <ContactUsForm/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.200432686759!2d83.46650159303249!3d27.65793467051839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399684350f43c393%3A0x1e74d5ecc4f83d0f!2sSita%20Rice%20Mill%20(Sita%20Food%20Industries)!5e0!3m2!1sen!2snp!4v1736179200326!5m2!1sen!2snp" width="600" height="450" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>

    </div>
      
    </>
  )
}

export default ContactUs
