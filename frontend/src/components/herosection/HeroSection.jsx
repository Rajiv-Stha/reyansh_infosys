import React from 'react'
import styles from "./herosection.module.css"
import HeroCard from '../herocard/HeroCard'
import data from "../../utils/data/Hero.json"
const HeroSection = () => {
  return (
    <>

    <section className={styles.hero}>
    <div className={styles.hero_text}>
      <h1>
      IT <span>Solutions</span> for your <span>Business</span>
      </h1>
      <p>
      Boost your business efficiency with smart IT solutions and easy-to-use accounting tools
      designed for seamless operations.
      </p>
      <button>Learn More</button>
    </div>
    <div className={styles.hero_image}>
      <img className={styles.dollar_img} src="/images/$erp.svg" alt="Dollar ERP" />
      <img className={styles.busy_img} src="/images/busy-accounting-software.svg" alt="Busy Software" />
    </div>
  </section>
  <div className={styles.heroCard_container}>
  {data.map((d)=>{
    return <HeroCard data={d}/>
  })}
  
  </div>

    </>
  )
}

export default HeroSection


