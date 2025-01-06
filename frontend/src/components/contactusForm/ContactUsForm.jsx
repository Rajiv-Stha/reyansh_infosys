import React from 'react'
import styles from "./contactUsForm.module.css"
const ContactUsForm = () => {
  return (
    <>
      <form>
        <div className={styles.form_row}>
            <div className={styles.form_input}>
                <label>Name <span>*</span></label>
                <input type='text' placeholder='Enter your name'/>
            </div>
            <div className={styles.form_input}>
            <label>Phone number <span>*</span></label>
            <input type='number' placeholder='Enter your phone number'/>
            </div>
        </div>
        <div className={styles.form_input}>
        <label>E-mail address <span>*</span></label>
        <input type='email' placeholder='Enter your email address'/>
        </div>
        <div className={styles.form_input}>
        <label>Subject <span>*</span></label>
        <input type='text' placeholder='Enter subject'/>
        </div>
        <div className={styles.form_input}>
        <label>Message <span>*</span></label>
        <textarea placeholder='Your message here'/>
        </div>
        <button className={styles.contact_submitBtn}>
            Submit
        </button>
      </form>
    </>
  )
}

export default ContactUsForm
