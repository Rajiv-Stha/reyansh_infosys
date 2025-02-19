import React from 'react'
import styles from "./contactUs.module.css"
import ContactUsForm from '../contactusForm/ContactUsForm'
//motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"

const ContactUs = () => {
  return (
    <>
    <div id='contactUs' className={styles.contactUs_container}>
    <div className={styles.contactUs_content}>
     <div className={styles.contactUs_text}>
    
          
            <motion.div
            variants={fadeIn("down",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:true, amount:0.7}}
             className={styles.contactUs_heading}>
                <div className={styles.heading_design}></div>
                <h1>Contact Us</h1>
            </motion.div>

            </div>
            <div className={styles.contactUs_wrapper}>
                <ContactUsForm/>
                <div className={styles.contactInfo_container}>
                <motion.div
                variants={fadeIn("down",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:true, amount:0.7}}
                 className={styles.contactDetails_wrapper}>
                <div className={styles.contactDetails_left}>
                  <h2>Mail Us at:</h2>
                  <div className={styles.contactInfo_box}>
                    <p>For Busy account software: </p>
                    <span>reyansh.busy2019@gmail.com</span>
                  </div>
                  <div className={styles.contactInfo_box}>
                    <p>For DollarERp: </p>
                    <span>reyansh.dollarerp@gmail.com</span>
                  </div>
                  <div className={styles.contactInfo_box}>
                    <p>For others IT services & Equipments: </p>
                    <span>Reyansh.infosys2019@gmail.com</span>
                  </div>
                </div>
                <div className={styles.contactDetails_right}>
                  <h2>Call Us at:</h2>
                <div className={styles.callDetails}>
                  <img src='/images/call.svg' alt='phone' />
                  <p>071-438201, 438246 <br/>9857036188<br/>9867021077</p>
                </div>
                </div>

                </motion.div>
                <motion.h2
                variants={fadeIn("down",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:true, amount:0.7}}
                 className={styles.findUs_text}>Find Us At</motion.h2>
                <motion.iframe
                variants={fadeIn("down",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:true, amount:0.7}}
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.105606311691!2d83.46155279999999!3d27.6831307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687c23b2e2fb9%3A0x5dc818e35ffd0009!2sREYANSH%20INFOSYS!5e0!3m2!1sen!2snp!4v1739961277499!5m2!1sen!2snp" width="600" height="450" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></motion.iframe>
                </div>
            </div>
    </div>

    </div>
    
      
    </>
  )
}

export default ContactUs
