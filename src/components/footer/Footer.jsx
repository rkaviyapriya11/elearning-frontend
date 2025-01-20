// import React from 'react';
// import './footer.css';
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-content">
//         <p>
//           &copy; 2024 Your SkillGrow Platform.All rights reserved.
//           made With❤️ R Kaviyapriya.
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Learn and grow with our carefully crafted online courses,
              designed to help you excel in your career and personal development.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: rkaviyapriya11@gmail.com</p>
            <p>Phone:+91 9655671039</p>
            <p>Address: Coimbatore</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com/your-facebook-username" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/invites/contact/?igsh=sv0az7tpaqpm&utm_content=mdwr5gr" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/r-kaviyapriya-756107293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>

          </div>
        </div>


        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SkillsGrow Platform. All Rights Reserved.Made With❤️ R Kaviyapriya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
