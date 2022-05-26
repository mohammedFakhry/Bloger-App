import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="Enter Your Email ... " />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter Your Password ..." />
                <button className="loginButton">Login</button>
            </form>

            <button className="loginRegisterButton"><Link to="/register" className="link">Register</Link></button>
        </div>
    )
}

export default Login