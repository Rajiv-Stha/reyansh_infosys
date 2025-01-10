import React from 'react'
import styles from "./whyAcc.module.css"
const WhyAcc = () => {
  return (
    <>
      <div id='whyAcc' className={styles.whyAcc_container}>
      <div className={styles.whyAcc_content}>

      <div className={styles.whyAcc_desc}>
      <h1>Why Accounting Software?</h1>
      <p>Accounting software allows detailed financial transaction tracking and nearly instant reporting and analysis. These tasks previously had to be performed by hand, using large transaction journals. It is essential for businesses of all sizes, offering a digital solution to streamline financial management. It simplifies tasks like invoicing, budgeting, and reporting, allowing business owners to focus on growth. By automating processes, it minimizes human error and ensures accuracy in financial data.</p>
      </div>
      <img src='/images/whyAcc.svg' alt='whyacc' />
      </div>
      </div>
    </>
  )
}

export default WhyAcc
