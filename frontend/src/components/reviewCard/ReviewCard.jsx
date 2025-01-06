import React from 'react'
import styles from "./reviewCard.module.css"
import { TiStar } from "react-icons/ti";

const ReviewCard = () => {
  return (
    <>
    <div className={styles.revieCard_wrapper}>
    <div className={styles.profileBox}>
        <img src='/images/hemanta.svg' alt='avatar'/>
        <h2 className={styles.username}>Hemanta Thapa</h2>
    </div>
    <p className={styles.userReview}>We always take care of our clients by creating experiences that put our clients first. The vast majority of our clients continue working with us after the project is complete.</p>
    <button className={styles.readMore_review}>Read more</button>
    <div className={styles.ratingStar}>
    <TiStar className={styles.starIcon}/>
    <TiStar className={styles.starIcon}/>
    <TiStar className={styles.starIcon}/>
    <TiStar className={styles.starIcon}/>

    </div>
    </div>
      
    </>
  )
}

export default ReviewCard
