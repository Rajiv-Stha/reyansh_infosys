import React from 'react'
import styles from "./aboutusPage.module.css"
import Navbar from '../../components/navbar/Navbar'

const AboutUs = () => {
  return (
    <>
    <div className={styles.aboutUs_wrapper}>
    <Navbar/>

   
      <div className={styles.aboutUs_text}>
    
          
            <div className={styles.aboutUs_heading}>
                <div className={styles.heading_design}></div>
                <h1>About Us</h1>
            </div>
            </div>
            </div>
      
    </>
  )
}

export default AboutUs
