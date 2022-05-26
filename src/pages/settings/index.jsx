import React from 'react'
import './settings.css'
import SideBar from '../../components/sideBar'
import profileImg from '../../image/vIqzOHXj.jpg'

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingstitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>

                <form action="" className="settingsForm">
                    <label>Porfile Picture</label>

                    <div className="settingsPP">
                        <img src={profileImg} alt="profile Img" width="" height="" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i></label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder="Jhon Dhoy" />
                    <label>Email</label>
                    <input type="email" placeholder="JhonDhoy@gmail.com" />
                    <label>Password</label>
                    <input type="text" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>

            <SideBar />
        </div>
    )
}

export default Settings