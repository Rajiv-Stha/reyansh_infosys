import React from 'react'
import styles from "./aboutus_goal.module.css"
import CoreValue from '../core_value/CoreValue'
import data from "../../utils/data/Corevalue.json"

const AboutUs_goal = () => {
  return (
    <div className={styles.coreValue_container}>
    <div className={styles.coreValue_content}>
    <div className={styles.goal_heading}>
    <img src='/images/core_value_aboutUs.svg' alt='core values' />
    <h2>Our Core Values</h2>
    </div>
    <div className={styles.goal_container}>
    {data.map((d)=>{
      return <CoreValue data={d}/>
    })}
    </div>
    <div className={styles.goal_wrapper}>

    
    <div className={styles.goal_heading}>
    <img src='/images/aboutUs_mission.svg' alt='core values' />
    <h2>Mission</h2>

    </div>
    <div className={styles.goal_text}>
    Empowering individuals, local businesses, and SME’s with advanced latest technology solutions to make their businesses accessible and competitive.
    </div>
</div>
<div className={styles.goal_wrapper}>

    <div className={styles.goal_heading}>
    <img src='/images/aboutUs_vision.svg' alt='core values' />
    <h2>Vision</h2>

    </div>
    <div className={styles.goal_text}>
    Recognition as a leading IT company by delivering cost-effective, innovative business solutions to transform businesses with a digital revolution.
    </div>
    </div>

    </div>

    </div>
  )
}

export default AboutUs_goal
