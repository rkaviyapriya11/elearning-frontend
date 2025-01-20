import React from 'react';
import './coursecard.css';
import { server } from '../../main';
import { UserData } from '../../contextapi/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { CourseData } from '../../contextapi/CourseContext';

const CourseCard = ({ course }) => {
    const navigate = useNavigate()
    const { user, isAuth } = UserData()

    const { fetchCourses } = CourseData();

    const deleteHandler = async (id) => {
        if(confirm('Are you sure you want to delete this course')){
            try {
                const { data } = await axios.delete(`${server}/api/course/${id}`, {
                    headers: {
                        token: localStorage.getItem("token")
                    },
                });
                toast.success(data.message);
                fetchCourses();
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
    };



    return (
        <div className="course-card">
            <img src={`${server}/${course.image}`} alt="" className='course-img' />
            <h3>{course.title}</h3>
            <p>Instructor -{course.createdBy} </p>
            <p>Duration - {course.duration} Months</p>
            <p>Price -  Rs. {course.price}</p>


            {isAuth ? (
                <>
                    {user && user.role !== "admin" ? (
                        <>
                            {user.subscription.includes(course._id) ? (
                                <button
                                    onClick={() => navigate(`/course/study/${course._id}`)}
                                    className="common-btn"
                                >
                                    Study
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate(`/course/${course._id}`)}
                                    className="common-btn"
                                >
                                    Get Started
                                </button>
                            )}
                        </>
                    ) : (
                        <button
                            onClick={() => navigate(`/course/study/${course._id}`)}
                            className="common-btn"
                        >
                            Study
                        </button>
                    )}
                </>
            ) : (
                <button onClick={() => navigate("/login")} className="common-btn">
                    Get Started
                </button>
            )}
            <br />

            {user && user.role === "admin" && (
                <button className='common-btn'
                    onClick={() => deleteHandler(course._id)}
                    style={{ background: "red" }}>
                    Delete
                </button>
            )}

        </div>
    )
}

export default CourseCard;