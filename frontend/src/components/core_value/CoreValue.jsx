import React from 'react'
import styles from "./corevalue.module.css"
const CoreValue = ({data}) => {
  return (
   <div className={styles.goal_wrapper}>
       <h3>{data.title}</h3>
       <p>{data.desc}</p>
       </div>
  )
}

export default CoreValue
