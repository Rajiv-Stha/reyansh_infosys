import React from 'react'
import styles from "./whyerp.module.css"

const WhyErp = () => {
  return (
    <>
          <div className={styles.whyErp_container}>
          <div className={styles.whyErp_content}>
    
          <div className={styles.whyErp_desc}>
          <h1>Why ERP Software?</h1>
          <p>Type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations. An ERP software system can also integrate planning, purchasing inventory, sales, marketing, finance, human resources, and more. The overall function of ERP is to support management in their daily tasks, speed up processes, and improve the organization of all parts of the business.</p>
          </div>
          <img src='/images/whyERP.svg' alt='whyacc' />
          </div>
          </div>
        </>
  )
}

export default WhyErp
