import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdPersonOutline } from "react-icons/md";

const Header = ({ isAuth }) => {
    const navigate = useNavigate()

    return (
        <header>

            {/* final */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand">SkillsGrow</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex justify-content-center w-100">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/courses'} className="nav-link">Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/about'} className="nav-link">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center">
                            {
                                isAuth ? (
                                    <button className='common-btn' style={{ marginLeft: '130px' }} onClick={() => navigate('/account')}>
                                        Account
                                    </button>
                                ) : (
                                    <button className='common-btn  d-flex align-items-center' style={{ marginLeft: '100px' }} onClick={() => navigate('/login')}>
                                        <MdPersonOutline className="me-2 " /> Login/Register
                                    </button>

                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>



        </header>
    );
};

export default Header;