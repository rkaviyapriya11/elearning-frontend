import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';
import icon1 from './icon_01.png'
import icon2 from './icon_02.png'
import icon3 from './icon_03.png'
import icon4 from './icon_04.png'
import icon5 from './icon_05.png'
import icon6 from './icon_06.png'
import icon7 from './icon_07.png'

import icon8 from './icon_08.png'
import icon9 from './icon_09.png'
import icon10 from './icon_10.png'
import icon11 from './icon_11.png'
// import icon12 from 'D:/Learning/frontend/src/pages/about/icon_12.png'



const About = () => {
  return (
    <div className="">
      <div className="about">
        <h1 style={{ marginTop: '-50px' }}>All in All Features That Will Never Stop</h1>

        {/* 1st row */}
        <div className="row mt-5">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center border-2">
            <img src={icon1} alt="" />
            <h3 className='fw-bold mt-3'>Bootstrap v5.3.2</h3>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon2} alt="" />
            <h5 className='fw-bold mt-3'>Swiper Slider</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon3} alt="" />
            <h5 className='fw-bold mt-3'>Flat Icon</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon4} alt="" />
            <h5 className='fw-bold mt-3'>FontAwesome Icon</h5>
          </div>
        </div>

        {/* 2nd row */}
        <div className="row mt-5">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center border-2">
            <img src={icon4} alt="" />
            <h3 className='fw-bold mt-3'>Html5</h3>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon5} alt="" />
            <h5 className='fw-bold mt-3'>Saas</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon6} alt="" />
            <h5 className='fw-bold mt-3'>Jquery</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon7} alt="" />
            <h5 className='fw-bold mt-3'>W3C Validation</h5>
          </div>
        </div>

        {/* 3rd row */}
        <div className="row mt-5">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center border-2">
            <img src={icon8} alt="" />
            <h3 className='fw-bold mt-3'>Fully Responsive</h3>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon9} alt="" />
            <h5 className='fw-bold mt-3'>Clean Code</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon10} alt="" />
            <h5 className='fw-bold mt-3'>Ajax Contact Form</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img src={icon11} alt="" />
            <h5 className='fw-bold mt-3'>Google Font</h5>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className="container h-100 w-100" style={{backgroundColor:'#8a4baf'}}>
        <div className="row mt-5">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center border-2">

            <h3 className='fw-bold mt-3'>Teaching In Digital Classroom</h3>
            <p></p>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">

            <h5 className='fw-bold mt-3'>We Arrange Many Events & Meetup</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">

            <h5 className='fw-bold mt-3'>100% Tuition Fee & No Extrea Charge</h5>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">

            <h5 className='fw-bold mt-3'>Natural Compass And Playgrounds</h5>
          </div>
        </div>
      </div> */}
    </div>

  )
}

export default About