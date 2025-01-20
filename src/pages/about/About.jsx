import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()

    return (
        <div className="about">
            <div className="about-content"></div>
            <div className="certify d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 d-flex text-center" style={{ lineHeight: '3rem' }}>
          <div className="w-100">
            <div className="p-5">
              <p className='fs-6 text-center' style={{color:'#8a4baf'}}>GO TO YOUR OWN PACE </p>
              <h1>Give their limitless potential unlimited access</h1>
              <p className='text-dark'>
              We are dedicated to providing high quality online
                courses to help individuals learn and grow in therr
                desired fields. Our experienced insrution ensure that
                each course is tailored for effective kearning and practical
                application.
              </p>
              <button
            className='common-btn'
            onClick={() => navigate('/courses')}
          >Give Premium Access</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default About