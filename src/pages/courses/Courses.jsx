import React, { useEffect } from 'react';
import './courses.css';
import { CourseData } from '../../contextapi/CourseContext';
import CourseCard from '../../components/CourseCard/CourseCard';
import { motion } from 'framer-motion';



const Courses = () => {
    const { courses } = CourseData();
    // console.log(courses);


    return (
        <div className="courses">
            <h2>Available Courses</h2>
            <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}


                className="course-container">
                {
                    courses && courses.length > 0 ? (
                        courses.map((e) => <CourseCard key={e._id} course={e} />)
                    ) : (
                        <p>No Courses Yet</p>
                    )}
            </motion.div>
        </div>

    )
};

export default Courses;

