import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Name ... " />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter Your Email ... " />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter Your Password ..." />
                <button className="registerButton">Register</button>
            </form>

            <button className="registerLoginButton"><Link to="/login" className="link">Login</Link></button>
        </div>
    )
}

export default Register