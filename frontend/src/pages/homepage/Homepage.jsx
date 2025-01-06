import React from 'react'
import styles from "./homepage.module.css"
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/herosection/HeroSection'
import AboutUs from '../../components/aboutUs/AboutUs'
import OurService from '../../components/ourService/OurService'
import Footer from '../../components/footer/Footer'
import WhyAcc from '../../components/whyAcc/WhyAcc'
import WhyErp from '../../components/whyErp/WhyErp'
import Review from '../../components/reviews/Review'
import ContactUs from '../../components/contactUs/ContactUs'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.homepage_container}>
    <div className={styles.homepage_content}>
    <HeroSection/>

    </div>
    </div>
    <div id='about_us'>

    <AboutUs/>
    </div>
    <OurService/>
    <WhyAcc/>
    <WhyErp/>
    <Review/>
    <ContactUs/>
    <Footer/>

    </>
  )
}

export default Homepage
