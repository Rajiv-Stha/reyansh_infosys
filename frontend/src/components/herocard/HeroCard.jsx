import React from 'react'
import styles from "./herocard.module.css"
const HeroCard = () => {
  return (
    <>
     <div className={styles.card_wrapper}>
     <img src='/images/Vector.svg' alt="vector"/>
     <div className={styles.card_textWrapper}>


     <h2>Inventory Management</h2>
     <p>Easily manage your inventory with details like batch numbers (including expiry dates), serial numbers, and parameters such as color, size, and style.</p>
     </div>
     </div>
    </>
  )
}

export default HeroCard
