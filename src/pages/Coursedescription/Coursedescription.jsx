import React, { useEffect, useState } from 'react';
import './coursedescription.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseData } from "../../context/CourseContext";
import { server } from '../../main';
import toast from 'react-hot-toast';
import { UserData } from '../../Context/UserContext';
import Loading from '../../components/loading/Loading';
import axios from 'axios';
import { motion } from 'framer-motion';


function Coursedescription({ user }) {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { fetchUser } = UserData();

    const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData()



    useEffect(() => {
        fetchCourse(params.id);
    }, []);

    const checkoutHandler = async () => {
        const token = localStorage.getItem("token");
        setLoading(true);

        const {
            data: { order },
        } = await axios.post(`${server}/api/course/checkout/${params.id}`,
            {},
            {
                headers: {
                    token,
                },
            }
        );


        const options = {
            key: "rzp_test_kg1TCwpOfrshTp",
            amount: order.id,
            currency: "INR",
            name: "E-Learning", //your business name
            description: "Learn With us",
            order_id: order.id,

            handler: async function (response) {
                const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

                try {
                    const { data } = await axios.post(`${server}/api/verification/${params.id}`,
                        {
                            razorpay_order_id,
                            razorpay_payment_id,
                            razorpay_signature

                        }, {
                        headers: {
                            token,
                        }
                    });

                    await fetchUser();
                    await fetchCourses();
                    await fetchMyCourse();
                    toast.success(data.message || "Payment Successful!");
                    setLoading(false)
                    navigate(`/payment-success/${razorpay_payment_id}`);

                } catch (error) {
                    toast.error(error.response?.data?.message)
                    setLoading(false)
                }
            },
            theme: {
                color: "#8a4baf",
            },
        };
        const razorpay = new window.Razorpay(options);

        razorpay.open();
    }



    return (
        <>
            {
                loading ? (<Loading />
                ) : (
                    <>
                        {course && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className='course-description'>
                                <div className="course-header">
                                    <img src={`${server}/${course.image}`} alt="" className='course-img' />
                                    <div className="course-info">
                                        <h2>{course.title}</h2>
                                        <p>Instructor : {course.createdBy}</p>
                                        <p>Duration : {course.duration}</p>
                                    </div>

                                </div>
                                <p>{course.description}</p>

                                <p>Lets get started with corse At Rs.{course.price}</p>
                                {
                                    user && user.subscription.includes(course._id) ? (
                                        <button onClick={() => navigate(`/course/study/${course._id}`)} className='common-btn'>Study</button>
                                    ) : (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }} onClick={checkoutHandler} className='common-btn'>Buy Now</motion.button>
                                    )}
                            </motion.div>
                        )}
                    </>
                )
            }
        </>
    )
}

export default Coursedescription;