import React from 'react'
import styles from "./ourservice.module.css"
import HeroCard from '../herocard/HeroCard'
import data from "../../utils/data/Ourservices.json"
//motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"
const OurService = () => {
  return (
    <>
     <motion.div
     variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:true, amount:0.7}}
      id="services" className={styles.ourService_container}>
     <div className={styles.service_heading}>
            <div className={styles.heading_design}></div>
            <h1>Our Services</h1>
        </div>
     <div className={styles.ourservice_card_container}>
     {data.map((d)=>{
      return <HeroCard data={d}/>
     })}
     </div>
     </motion.div> 
    </>
  )
}

export default OurService
