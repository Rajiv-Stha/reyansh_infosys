import React from 'react'
import styles from "./reviewCard.module.css"
import { TiStar } from "react-icons/ti";
//motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"

const ReviewCard = ({data}) => {
  return (
    <>
    <motion.div
    variants={fadeIn("down",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:true, amount:0.7}}
     className={styles.revieCard_wrapper}>
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
    </motion.div>
      
    </>
  )
}

export default ReviewCard
