
import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_la1x50h', 'template_hr5o54u', form.current, {
        publicKey: 'VHjXYzmgF7-CV_V3B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for your feedback! Your submission has been received successfully.')
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="contact-page">
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="contact-container">
        <h2>Let's Connect! </h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required placeholder='Let us know who you are' />
          <label>Email</label>
          <input type="email" name="from_email" required placeholder='Drop your email here' />
          <label>Message</label>
          <textarea name="message" required placeholder='Tell me what’s on your mind!' />
          <input type="submit" value="Send" />
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
