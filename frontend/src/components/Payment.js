import React, { useState } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import "./styles/payment.css";

function Payment() {
    const { state } = useLocation()
    console.log(state[0].price)

    const history = useHistory();
    const [username, setUserName] = useState()
    const [paymentmethod, setPaymentmethod] = useState()
    // const [price, setPrice] = useState()
    const price = state[0].price;
    const [status, setStatus] = useState()
    const onSignup = (e) => {
        e.preventDefault();

        const payload = {
            username,
            paymentmethod,
            price,
            status,
        }
        axios.post("http://localhost:7781/payments/setpayment", payload)
            .then(response => history.push('/home'))
            .then(alert("Thank You for shopping ....! \n Press 'OK' to return to home page"))
            .catch(err => alert("Error in creating payment"))

        //    let a=Math.floor(Math.random() * 10);
            

    }

    
    // console.log(response)

    return (
        <>
            <div class="paymentform">

                <div class="payment-box">
                    <h1 className="pay">Payment Form</h1>
                    <h4 className="ordertext">Order Number: {Math.ceil(Math.random() * 90000)};</h4>
                    <div>
                        <form onSubmit={(e) => onSignup(e)}>
                            <label for="name">Username</label>
                            <input className="payinp" type="text" name="name" placeholder="" required onChange={(e) => setUserName(e.target.value)} />
                            <label for="email">Payment Method</label>
                            <input className="payinp" type="text" name="email" placeholder="" required onChange={(e) => setPaymentmethod(e.target.value)} />
                            <label for="number">Price</label>
                            {/* <input className="payinp" type="tel" name="number" placeholder="" required onChange={(e) => setPrice(e.target.value)} /> */}
                            <label className="label">Rs. {state[0].price}/-</label>
                            <label for="address">Restaurant Name</label>
                            <input className="payinp" type="text" name="address" placeholder="" required onChange={(e) => setStatus(e.target.value)} />
                            <button class="btn8" type="submit">Confirm Payment</button>
                            
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Payment;