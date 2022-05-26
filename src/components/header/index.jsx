import React from 'react'
import './header.css'

import image from '../../image/header.jpg'


const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>

            <div className="headerImage">
                <img src={image} alt="header photo" width="100%" height="100%" />
            </div>
        </div>
    )
}

export default Header