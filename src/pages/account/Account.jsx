// import React from 'react'
// import { MdDashboard } from "react-icons/md";
// import { IoMdLogOut } from "react-icons/io";
// import './account.css'
// import { UserData } from '../../contextapi/UserContext';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const Account = ({ user }) => {
//     const { setIsAuth, setUser } = UserData();

//     const navigate = useNavigate()


//     const logoutHandler = () => {
//         localStorage.clear();
//         setUser([]);
//         setIsAuth(false);
//         toast.success("Logged Out");
//         navigate('/login');
//     }
    

//     return (
//         <div>
//             {user && (
//                 <div className="profile">
//                     <h2>My Profile</h2>
//                     <div className="profile-info">
//                         <p>
//                             <strong>Name -{user.name}</strong>

//                         </p>
//                         <p>
//                             <strong>Email - {user.email}</strong>
//                         </p>
//                         <button
//                             onClick={() => navigate(`/${user._id}/dashboard`)}
//                             className='common-btn'><MdDashboard />
//                             Dashboard
//                         </button>

//                         <br></br>

//                         {user.role === "admin" && (
//                             <button
//                                 onClick={() => navigate(`/admin/dashboard`)}
//                                 className='common-btn'><MdDashboard />
//                                 Admin Dashboard
//                             </button>
//                         )}



//                         <br></br>

//                         <button
//                             onClick={logoutHandler}
//                             className='common-btn'
//                             style={{ backgroundColor: "red" }}><IoMdLogOut />
//                             Logout
//                         </button>

//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Account



import React, { useEffect } from 'react'
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import './account.css'
import { UserData } from '../../contextapi/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Account = ({ user }) => {
    const { setIsAuth, setUser } = UserData();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.clear();
        setUser([]);
        setIsAuth(false);
        toast.success("Logged Out");
        navigate('/login');
    }

    
    useEffect(() => {
        const handleKeyPress = (e) => {
            // Check for Ctrl + L
            if (e.ctrlKey && e.key === 'l') {
                logoutHandler();
            }
        };

      
        window.addEventListener('keydown', handleKeyPress);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            {user && (
                <div className="profile">
                    <h2>My Profile</h2>
                    <div className="profile-info">
                        <p>
                            <strong>Name -{user.name}</strong>
                        </p>
                        <p>
                            <strong>Email - {user.email}</strong>
                        </p>
                        <button
                            onClick={() => navigate(`/${user._id}/dashboard`)}
                            className='common-btn'><MdDashboard />
                            Dashboard
                        </button>

                        <br></br>

                        {user.role === "admin" && (
                            <button
                                onClick={() => navigate(`/admin/dashboard`)}
                                className='common-btn'><MdDashboard />
                                Admin Dashboard
                            </button>
                        )}

                        <br></br>

                        <button
                            onClick={logoutHandler}
                            className='common-btn'
                            style={{ backgroundColor: "red" }}><IoMdLogOut />
                            Logout
                        </button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Account;
