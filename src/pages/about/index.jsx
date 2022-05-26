import React from 'react'
import './about.css'

import SideBar from '../../components/sideBar'
import aboutImg from '../../image/about_me.png'

const About = () => {
    return (
        <div className="about">
            <div className="aboutWrapper">
                <h2 className="aboutTitle">Blog <span>Node & React</span></h2>
                <img src={aboutImg} alt="about images" className="aboutImg" width="" height="" />
                <h3 className="aboutSubTitle">Lorem ipsum dolor sit amet consectetur.</h3>
                <p className="aboutDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa numquam quis inventore, dolores temporibus sunt nostrum. Recusandae nam consectetur, porro, illo molestiae culpa voluptatem optio quisquam iusto architecto veritatis dolores. Eos cum nostrum, incidunt aperiam fugit cupiditate doloremque ex asperiores quis temporibus, necessitatibus corporis provident explicabo et distinctio sint odit deleniti amet quasi veniam. Itaque similique ad minus a magnam, distinctio cum enim ipsa pariatur error repellendus illo eos explicabo placeat ducimus quo corrupti earum ratione unde? Error reiciendis doloremque eius necessitatibus. Accusamus, veniam explicabo unde vel esse veritatis? Ipsa magni velit sit iusto quidem voluptatem dolorum mollitia repellendus odit aliquid quod, quibusdam consequatur repellat. Optio velit accusamus, officiis impedit neque architecto atque aliquid dignissimos quisquam eos, recusandae obcaecati. Dolorem dolorum perspiciatis labore officiis fugiat provident asperiores unde placeat suscipit dolores. Soluta similique atque architecto provident quod autem officia quibusdam debitis iste cumque itaque, ex molestias consequatur, at doloribus!</p>
            </div>

            <SideBar />
        </div>
    )
}

export default About