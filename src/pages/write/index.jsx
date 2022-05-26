import React from 'react'
import './write.css'

import writeImage from '../../image/write.png'


const Write = () => {
    return (
        <div className="write">
            <img src={writeImage} alt="write Images" className="writeImg" width="" height="" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Title" className="writeInput writeTitle" autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea type="text" placeholder='Tell Your Story' className="writeInput writeText" cols="30" rows="10"></textarea>
                </div>

                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write