import React from 'react'
import './sideBar.css'
import aboutImg from '../../image/sideBar.jpg'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={aboutImg} alt="side bar images" width="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda fugiat sequi cumque eligendi libero?</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"><Link to="#" className="link">Life</Link></li>
                    <li className="sidebarListItem"><Link to="#" className="link">Music</Link></li>
                    <li className="sidebarListItem"><Link to="#" className="link">Style</Link></li>
                    <li className="sidebarListItem"><Link to="#" className="link">Sport</Link></li>
                    <li className="sidebarListItem"><Link to="#" className="link">Tech</Link></li>
                    <li className="sidebarListItem"><Link to="#" className="link">Cinama</Link></li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSochial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar