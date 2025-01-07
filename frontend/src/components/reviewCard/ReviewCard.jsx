import React from 'react'
import styles from "./reviewCard.module.css"
import { TiStar } from "react-icons/ti";

const ReviewCard = ({data}) => {
  return (
    <>
    <div className={styles.revieCard_wrapper}>
    <div className={styles.profileBox}>
        <img src={data.img} alt='avatar'/>
        <h2 className={styles.username}>{data.username}</h2>
    </div>
    <p className={styles.userReview}>{data.text}</p>
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
