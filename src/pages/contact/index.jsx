import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <span className="contactTitle">Contact Me</span>
            <form action="" className="contactForm">
                <label>Username</label>
                <input type="text" className="contactInput" placeholder="Enter Your Name ... " />
                <label>Email</label>
                <input type="email" className="contactInput" placeholder="Enter Your Email ... " />
                <label>Subject</label>
                <input type="text" className="contactInput" placeholder="Enter subject ..." />
                <label></label>
                <textarea className="contactInput" cols="60" rows="20"></textarea>
                <button className="contactButton">Send</button>
            </form>
        </div>
    )
}

export default Contact