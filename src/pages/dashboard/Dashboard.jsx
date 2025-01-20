import React from 'react';
import './dashborad.css';
import { CourseData } from '../../contextapi/CourseContext';
import CourseCard from '../../components/CourseCard/CourseCard';

const Dashboard = () => {
    const { mycourse } = CourseData();
    // console.log(mycourse);
    return (
        <div className="student-dashboad">
            <h2>All Enrolled Courses</h2>
            <div className="dashboard-content">
                {
                    mycourse && mycourse.length > 0 ? (
                        mycourse.map((e) => <CourseCard key={e._id} course={e} />)
                    ) : (
                        <p>No Course Enrolled Yet</p>
                    )}
            </div>
        </div>
    );
};

export default Dashboard;