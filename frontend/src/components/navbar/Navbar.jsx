import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("/")
  const [activeHash, setActiveHash] = useState("")
  const location = useLocation()
  


  console.log("outer",location)
  useEffect(()=>{
    console.log("inner",location)
    if(location.pathname ==="/" || location.pathname==="/about_us"){

      setActivePage(location.pathname)
    }else{
      setActivePage("/")
    }
  },[location.pathname, location.hash])
  useEffect(()=>{
    if(activeHash ==="#services" || activeHash ==="contactUs"){
      
    }

  },[activeHash])

  const navContent = [
    {
      path: "/",
      text:"Home",
    },
    {
      path: "/about_us",
      text:"About Us",
    }
  ]
  return (
    <>
      <div className={styles.nav_wrapper}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_content}>
            <Link to={"/"}>
              <img className={styles.logo} src="/images/logo.svg" alt="logo" />
            </Link>
            <ul className={styles.navList}>
            {
              navContent.map((item)=>{
                return <li className={[item.path===activePage? styles.active:null]}>
                <Link to={item.path}>{item.text}</Link>
              </li>
              })
            }
              
              <li>
              <a href="#services">Our Services</a>


              </li>
              <li>
              <a href="#contactUs">Contact</a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
