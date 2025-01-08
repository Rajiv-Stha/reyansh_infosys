import React from 'react'
import styles from "./review.module.css"
import ReviewCard from '../reviewCard/ReviewCard'
import data from "../../utils/data/Testimonials.json"
const Review = () => {
  return (
    <div className={styles.reveiw_container}>
      <div className={styles.review_content}>
      <div className={styles.review_text}>

      
        <div className={styles.review_heading}>
            <div className={styles.heading_design}></div>
            <h1>What Our Client Say</h1>
        </div>
        <p className={styles.reviewText}>We always take care of our clients by creating experiences that put our clients first. The vast majority of our clients continue working with us after the project is complete.</p>
        </div>
        <div className={styles.review_card_container}>
       {data.map((d)=>{
        return <ReviewCard data={d}/>
       })}
        </div>
      </div>
    </div>
  )
}

export default Review
