import React from 'react';

function LoginAdmin() {
    return (
        <div>
            <div class="containerform">
                <div class="login-box">
                    <h1>Login As Admin</h1>
                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" required />
                        <button class="btn">Login</button>
                    </form>

                    <p class="para-2">
                        Not have an account? <a href="index.html">Sign Up Here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin;
