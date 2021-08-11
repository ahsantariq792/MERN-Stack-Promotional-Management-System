import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/style.css';

const Signuprestaurant = () => {
    const history = useHistory();
    const [restaurantName, setRestaurantName] = useState()
    const [contact, setContact] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const onSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password must be same")
            return
        }

        const payload = {
            restaurantname: restaurantName,
            contact,
            password,
            address,
            email
        }
        axios.post("http://localhost:7781/restaurants/signup1", payload)
            .then(response => history.push('/foods'))
            .catch(err => alert("Error in creating restaurant"))

    }
    return (
        <>
            <div class="containerform">

                <div class="signup-box">
                    <h1>Sign Up</h1>
                    <h4 className="signuptext">Restaurant Sign-up Form</h4>
                    <div>
                        <form onSubmit={(e) => onSignup(e)}>
                            <label for="name">Restaurant name</label>
                            <input type="text" required name="name" placeholder="" onChange={(e) => setRestaurantName(e.target.value)} />
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="" required onChange={(e) => setEmail(e.target.value)} />
                            <label for="number">Phone Number</label>
                            <input type="tel" name="number" placeholder="" required onChange={(e) => setContact(e.target.value)} />
                            <label for="address">Address</label>
                            <input type="text" name="address" placeholder="" required onChange={(e) => setAddress(e.target.value)} />
                            <label for="password">Password</label>
                            <input type="password" name="password" placeholder="" required onChange={(e) => setPassword(e.target.value)} />
                            <label for="password2">Confirm Password</label>
                            <input type="password" name="password2" placeholder="" required onChange={(e) => setConfirmPassword(e.target.value)} />
                            <button class="btn1" type="submit">Sign-up</button>
                            {/* <input class="btn" type="submit" value="Sign-up">  */}
                        </form>
                    </div>
                    <div>
                    <p className="para-2">
                        Already have an account?
                        <Link to="/loginrestaurant">
                            Login Here
                        </Link>
                    </p>
                </div>

                </div>
                
                

            </div>
        </>
    )
}

export default Signuprestaurant;