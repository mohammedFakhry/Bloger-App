import React from 'react'
import { Link } from 'react-router-dom'

import './topBar.css'
import img from '../../image/vIqzOHXj.jpg'

const TopBar = ({ user }) => {

    const handleToggle = (e) => {
        const navElement = document.querySelector(".topCenter");
        const toggleBtn = document.querySelector(".toggleNav");
        
        if (navElement.classList.contains("openNav")) {
            navElement.classList.remove("openNav");
            toggleBtn.classList.remove("openedNav");
        } else {
            navElement.classList.add("openNav");
            toggleBtn.classList.add("openedNav");
        }
    }

    return (
        <nav className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                    <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user? (
                        <>
                            <Link to="/settings" className="link"><img src={img} alt="avatar" className="topImg" /></Link>
                            <i className="topSearchIcon fas fa-search"></i>
                        </>
                    ) :(
                        <ul className="topList">
                            <li className="topListItem"><Link to="/login" className="link">Login</Link></li>
                            <li className="topListItem"><Link to="/register" className="link">Register</Link></li>
                        </ul>
                    )
                }
                <button className="toggleNav openedNav" onClick={ () => handleToggle() }>
                    <span></span><span></span><span></span>
                </button>
            </div>

            
        </nav>
    )
}

export default TopBar