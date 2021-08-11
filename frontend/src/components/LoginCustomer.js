import react, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import "./styles/style.css";


const LoginCustomer = () => {
    const history = useHistory();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const onLogin = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password
        }
        axios.post("http://localhost:7781/users", payload)
        .then(response =>{
            console.log(response)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('isLoggedIn', true)
            history.push('/home')})
        .catch(err => alert("Error in Login"))
    }
    return (
        <div>
            <div class="containerform">
                <div class="login-box">
                    <h1>Login As Customer</h1>
                    <form onSubmit={(e) => onLogin(e)}>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
                        <button class="btn1" type="submit">Login</button>
                    </form>

                    <p class="para-2">
                        Not have an account? <a href="index.html">Sign Up Here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginCustomer