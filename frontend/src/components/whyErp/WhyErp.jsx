import React from 'react'
import styles from "./whyerp.module.css"
//motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"

const WhyErp = () => {
  return (
    <>
          <div id='whyErp' className={styles.whyErp_container}>
          <div className={styles.whyErp_content}>
    
          <motion.div
          variants={fadeIn("down",0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:true, amount:0.7}}
           className={styles.whyErp_desc}>
          <h1>Why ERP Software?</h1>
          <p>Type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations. An ERP software system can also integrate planning, purchasing inventory, sales, marketing, finance, human resources, and more. The overall function of ERP is to support management in their daily tasks, speed up processes, and improve the organization of all parts of the business.</p>
          </motion.div>
          <motion.img
          variants={fadeIn("down",0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once:true, amount:0.7}}
           src='/images/whyERP.svg' alt='whyacc' />
          </div>
          </div>
        </>
  )
}

export default WhyErp
