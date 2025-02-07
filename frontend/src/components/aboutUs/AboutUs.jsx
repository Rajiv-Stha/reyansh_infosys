import React from 'react'

import styles from "./aboutUs.module.css"
//motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"
const AboutUs = () => {
  return (
    <>
    <div className={styles.aboutUs_container}>

      <div className={styles.aboutUs_wrapper}>
      <motion.div
      variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, amount:0.7}}
       className={styles.logo_wrapper}>

      <img src='/images/logo.svg' alt='logo'/>
      <h1>Reyansh Infosys</h1>
      </motion.div>
      <motion.div
       variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true, amount:0.7}}
       className={styles.aboutUs_content}>
        <div className={styles.aboutUs_heading}>
                  <div className={styles.heading_design}></div>
                  <h1>About Us</h1>
              </div>
      <p>It is our great pleasure to introduce our company Reyansh Infosys as a rapidly growing IT company serving nationally. We are highly motivated in delivering our customers with quality IT Software & Equipment’s like Branded Computer, Laptop, Printer and Server (DELL & ACER), Antivirus, Hardware, Software, Web based applications etc... We believe that our success is directly proportional to the success and satisfaction of our customers. We are also dedicated to developing the software. At Reyansh Infosys, we are aware that client happiness and success are directly related to our own. For this reason, we are dedicated to providing top products and services while making sure that each customer gets a great deal offered. We take great satisfaction in creating software that is specifically suited to our clients' requirements, improving their business processes and raising general efficiency.</p>
      <button>Learn More</button>

      </motion.div>

    </div>
      </div>
    </>
  )
}

export default AboutUs
