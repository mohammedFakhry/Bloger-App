import React from 'react'
import './error.css'

import errorImg from '../../image/error.png'
import { Link } from 'react-router-dom'


const Error = () => {
    return (
        <div className="error">
            <img src={errorImg} alt="error 404" className="errorImg" width="" height="" />
            <span className='notFound'>page not found</span>
            <button className='homeBtn'><Link to="/" className="link">Go Home</Link></button>
        </div>
    )
}

export default Error