import React from 'react'
import styles from "./aboutusPage.module.css"
import Navbar from '../../components/navbar/Navbar'
import AboutUs_goal from '../../components/aboutUs_goal/AboutUs_goal'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.aboutUs_headWrapper}>
    <div className={styles.aboutUs_headWrapper_content}>

    

    <div className={styles.aboutUs_text}>
    
          
    <div className={styles.aboutUs_heading}>
        <div className={styles.heading_design}></div>
        <h1>About Us</h1>
    </div>
    </div>
    </div>

    </div>
    <div className={styles.aboutUs_hero}>
    <div className={styles.hero_content}>

   
    <p>It is our great pleasure to introduce our company Reyansh Infosys As a rapidly growing IT company serving nationally. We are highly motivated in delivering our Customers with quality IT Software & Equipment’s like Branded Computer, Laptop, Printer And Server(DELL & ACER), Antivirus, Hardware, Software, Web based applications etc... We believe that our success is directly proportional to the success and satisfaction of our customers. We are also dedicated in developing the software.</p>
    <img src='/images/aboutUs_hero.svg' alt='hero' />
    </div>
    </div>
   <AboutUs_goal/>
   
      
    </>
  )
}

export default AboutUs
