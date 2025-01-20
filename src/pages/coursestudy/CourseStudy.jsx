import React, { useEffect } from 'react';
import './coursestudy.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CourseData } from '../../contextapi/CourseContext';
import { server } from '../../main';
import { motion } from 'framer-motion';



const CourseStudy = ({ user }) => {
  const params = useParams()

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate('/');

  useEffect(() => {
    fetchCourse(params.id)
  }, []);

  return (
    <>
      {course && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="course-study-pg">
          <img src={`${server}/${course.image}`} alt="" width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5> By - {course.createdBy}</h5>
          <h5>Duration - {course.duration} Months </h5>
          <Link to={`/lectures/${course._id}`}>Lectures</Link>
        </motion.div>
      )}
    </>
  );

};

export default CourseStudy;