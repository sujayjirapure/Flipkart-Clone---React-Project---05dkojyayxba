import React from 'react'
import '../styles/App.css';
import { Link ,useNavigate } from "react-router-dom";
import { AiFillCloseSquare } from "react-icons/ai";

const Paymentmodal = () => {


  return (
    <div className='payment-outter'>
        <div className='payment-inner'>
            <div className='payment-close'>
                <Link to={`/`}>
                    <AiFillCloseSquare/>Close
                </Link>
            </div>
            <h2>Thank you ! Payment completed </h2>
            <br></br>
            <p>Your order has been place please go back to home</p>
        </div>
    </div>
  )
}


export default Paymentmodal;
