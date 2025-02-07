import React, {useRef, useState} from 'react'
import styles from "./contactUsForm.module.css"
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
//motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"

const ContactUsForm = () => {
  const [value, setValue] = useState({
    username: "",
    phone:"",
    useremail:"",
    subject:"",
    message:"",
  })
  const { username, phone, useremail, subject, message } = value;

  const handleReset=()=>{
    setValue({
      username: "",
      phone: "",
      useremail: "",
      subject:"",
      message: ""
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setValue((prev) => ({
      ...prev, 
      [name]: value, 
    }));
  };
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ca7awyx', 'template_7bn5hag', form.current, {
        publicKey: 'CQtPBqHL89pzj7wym',
      })
      .then(
        () => {
          handleReset()
          toast.success('Form Submitted Successfully')
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <>

      <motion.form
      variants={fadeIn("down",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:true, amount:0.7}}
       ref={form} onSubmit={sendEmail}>
        <div className={styles.form_row}>
            <div className={styles.form_input}>
                <label>Name <span>*</span></label>
                <input type='text' name='username' onChange={handleChange} value={username} placeholder='Enter your name'/>
            </div>
            <div className={styles.form_input}>
            <label>Phone number <span>*</span></label>
            <input type='text' name='phone' value={phone} onChange={handleChange} placeholder='Enter your phone number'/>
            </div>
        </div>
        <div className={styles.form_input}>
        <label>E-mail address <span>*</span></label>
        <input type='email' name='useremail' value={useremail} onChange={handleChange} placeholder='Enter your email address'/>
        </div>
        <div className={styles.form_input}>
        <label>Subject <span>*</span></label>
        <input type='text' name='subject' value={subject} onChange={handleChange} placeholder='Enter subject'/>
        </div>
        <div className={styles.form_input}>
        <label>Message <span>*</span></label>
        <textarea name='message' value={message} onChange={handleChange} placeholder='Your message here'/>
        </div>
        <button className={styles.contact_submitBtn}>
            Submit
        </button>
      </motion.form>
      
    </>
  )
}

export default ContactUsForm
