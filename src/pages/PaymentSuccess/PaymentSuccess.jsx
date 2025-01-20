import React from 'react';
import './paymentsuccess.css'
import { Link, useParams } from 'react-router-dom';

const PaymentSuccess = ({ user }) => {
    const params = useParams()
    return (
        <div className='payment-success-pg'>
            {user && (<div className='success-msg'>
                <h2>Payment Successfull</h2> <br />
                <p>Your course subscription has been activated</p>
                <p>Reference No - {params.id}</p>
                <Link to={`/${user._id}/dashboard`} className='common-btn'>Go to Dashboard</Link>
            </div>)}
        </div>

    )}

export default PaymentSuccess;

