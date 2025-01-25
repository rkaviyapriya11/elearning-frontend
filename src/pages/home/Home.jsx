import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LuBrainCircuit } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiWorld } from "react-icons/gi";
import './home.css';
import { motion } from 'framer-motion';


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="home" >
        <div className="home-content">
          <motion.h1
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
          >Welcome To Our SkillsGrow Platform</motion.h1>
          <p>Lern, Grow, Excel</p>
          <motion.button
         initial={{ opacity: 0, translateX: "100%" }}
         whileInView={{ opacity: 1, translateX: 0 }}
         transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className='common-btn'
            onClick={() => navigate('/courses')}
          >Get Started</motion.button>
        </div>
      </div>
      <br /> <br />
      {/* section 1 */}
    

<div className="info">
  <p className="fs-6 text-center">Education for everyone</p>
  <h1 className="h1 text-center" style={{ color: '#8a4baf' }}>
    Affordable Online Courses and Learning Opportunities
  </h1>
  <br />
  <div className="container">
    <div className="row justify-content-center">
      {/* 1 */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <div className="card bg-body-secondary border-0 h-100">
          <div className="card-body text-center">
            <LuBrainCircuit className="w-25 h-25 m-2" />
            <h3 className="card-title fs-4">Learn the Latest Top Skills</h3>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Learning top skills can bring an extraordinary outcome in a career.
            </h6>
            <Link className="fs-5" style={{ color: '#8a4baf' }} to="/courses">
              Start Now
            </Link>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <div className="card bg-body-secondary border-0 h-100">
          <div className="card-body text-center">
            <RiComputerLine className="w-25 h-25 m-2" />
            <h3 className="card-title fs-4">Learn at Your Own Place</h3>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Everyone prefers to enjoy learning at their own pace, and that gives a great result.
            </h6>
            <Link className="fs-5" style={{ color: '#8a4baf' }} to="/courses">
              Start Now
            </Link>
          </div>
        </div>
      </div>
      {/*  3 */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <div className="card bg-body-secondary border-0 h-100">
          <div className="card-body text-center">
            <LiaIndustrySolid className="w-25 h-25 m-2" />
            <h3 className="card-title fs-4">Learn From Industry Experts</h3>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Experienced teachers can assist in learning faster with their best approaches!
            </h6>
            <Link className="fs-5" style={{ color: '#8a4baf' }} to="/courses">
              Start Now
            </Link>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <div className="card bg-body-secondary border-0 h-100">
          <div className="card-body text-center">
            <GiWorld className="w-25 h-25 m-2" />
            <h3 className="card-title fs-4">Enjoy Learning From Anywhere</h3>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              We are delighted to give you options to enjoy learning from anywhere in the world.
            </h6>
            <Link className="fs-5" style={{ color: '#8a4baf' }} to="/courses">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* section 2 */}
      <div className="view-course d-flex align-items-center" style={{ backgroundColor: '#8a4baf', minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            {/* Left Section - Text */}
            <div className="col-12 col-md-6 d-flex align-items-center" style={{ lineHeight: '2rem' }}>
              <div className="w-100">
                <div className="p-5">
                  <p className='fs-6 text-center text-dark'>Distance learning</p>
                  <h1>Feel Like You Are Attending Your Classes Physically!</h1> <br />
                  <p className='text-dark'>
                    SkillGrow training programs can bring you a super exciting experience of learning through online! You never face any
                    negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible
                    learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.
                  </p>
                  <button
                    className='common-btn '
                    onClick={() => navigate('/courses')}
                  >View Courses</button>
                </div>
              </div>
            </div>

            {/* Right Section - Background Image */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px'
              }}>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="certify d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 d-flex text-center" style={{ lineHeight: '3rem' }}>
          <div className="w-100">
            <div className="p-5">
              <p className='fs-6 text-center' style={{ color: '#8a4baf' }}>AFFORDABLE CERTIFICATION</p>
              <h1>Get Your Quality Skills Certificate Through Online Exam</h1>
              <p className='text-dark'>
                Students friendly pricing for the certificate programs helps individuals to get their skill certificate easier than ever!
              </p>
              <button
                className='common-btn'
                onClick={() => navigate('/courses')}
              >Get Started Now</button>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Home;