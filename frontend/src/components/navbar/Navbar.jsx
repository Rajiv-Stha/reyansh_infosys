import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_content}>
            <Link to={"/"}>
              <img className={styles.logo} src="/images/logo.svg" alt="logo" />
            </Link>
            <ul className={styles.navList}>
              <li className={styles.active}>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"about_us"}>About Us</Link>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
              <a href="#contactUs">

              Contact
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
