import React from 'react'
import styles from "./homepage.module.css"
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/herosection/HeroSection'
import AboutUs from '../../components/aboutUs/AboutUs'
import OurService from '../../components/ourService/OurService'
import Footer from '../../components/footer/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.homepage_container}>
    <div className={styles.homepage_content}>
    <HeroSection/>

    </div>
    </div>
    <AboutUs/>
    <OurService/>
    <Footer/>

    </>
  )
}

export default Homepage
