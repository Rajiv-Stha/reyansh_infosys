import React from 'react'
import styles from "./herocard.module.css"
const HeroCard = ({data}) => {
  return (
    <>
     <div className={styles.card_wrapper}>
     <img src={data.img} alt="vector"/>
     <div className={styles.card_textWrapper}>


     <h2>{data.title}</h2>
     <p>{data.desc}</p>
     </div>
     </div>
    </>
  )
}

export default HeroCard
