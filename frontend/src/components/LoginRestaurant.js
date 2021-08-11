import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./styles/style.css";

const HARD_ROUTES = [
    {
        "email": "khanbrost@gmail.com",
        "route": "/foodskhan"
    },
    {
        "email": "javaidnehari@gmail.com",
        "route": "/foodsjawaid"
    },
    {
        "email": "biryanichowk@gmail.com",
        "route": "/foods"
    },
    {
        "email": "shaheenshinwari@gmail.com",
        "route": "/foodsshaheen"
    },
    {
        "email": "pizzapoint@gmail.com",
        "route": "/foodspizza"
    },
    {
        "email": "butlercafe@gmail.com",
        "route": "/foodscafe"
    },
]

const LoginRestaurant = () => {
    const history = useHistory();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [routeMatch, setRouteMatch] = useState(false)
    const onLogin = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password,
        }
        axios.post("http://localhost:7781/restaurants", payload)
        .then(response =>{
            console.log(response)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('isLoggedIn', true)
            for (let element of HARD_ROUTES)
             {
                
                if(element?.email == response.data.email){
                    debugger

                    history.push(`${element?.route}`)
                    setRouteMatch(true)
                    break;
                }
                
            }
            if(routeMatch){
                history.push('/foods')
                
            }
            })
        .catch(err => alert("Error in Login"))
    }
    return (
        <div>
            <div class="containerform">
                <div class="login-box">
                    <h1>Login As Restaurant</h1>
                    <form onSubmit={(e) => onLogin(e)}>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
                        <button class="btn1" type="submit">Login</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginRestaurant;