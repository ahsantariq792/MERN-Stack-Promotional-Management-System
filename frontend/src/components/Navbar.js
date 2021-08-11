import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import "./styles/style.css";

function Navbar() {
    const history = useHistory();
    const [isLogged, setIsLogged] = useState()
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        setIsLogged(isLoggedIn)

    }, [isLogged])

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid t-0">
                    <Link to="/">
                        <a className="navbar-brand text-light welcome" href="#">Welcome</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link to="/home">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>

                            <Link to="/about">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">About Us</a>
                                </li>
                            </Link>

                            <Link to="/contact">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Contact Us</a>
                                </li>
                            </Link>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <Link to="/signupcustomer">
                                        <li><a className="dropdown-item" href="#">Sign up as Customer</a></li>
                                    </Link>
                                    <Link to="/signuprestaurant">
                                        <li><a className="dropdown-item" href="#" id="adminlogin">Sign up as Restaurant</a></li>
                                    </Link>
                                    <li><hr className="dropdown-divider" /></li>
                                    {/* <Link to="/loginadmin">
                                        <li><a className="dropdown-item" id="adminlogin" href="#">Login as admin</a></li>
                                    </Link> */}

                                </ul>
                            </li>
                            {isLogged ? <Link onClick={(() => logout())}>
                                <li className="nav-item">
                                    <span className="nav-link active text-light" aria-current="page" href="#">Logout</span>
                                </li>
                            </Link>
                                : null}
                        </ul>
                    </div>
                </div>
            </nav>

            
        </>
    )
}

export default Navbar;
