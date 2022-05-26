import React from 'react'
import './post.css'

import postImg from '../../image/post.jpg'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <div className="post">
            <img src={postImg} alt="post images" className="postImg" width="" height="" />
            <div className="postInfo">
                <div className="postCsts">
                    <span className="postCst">Music</span>
                    <span className="postCst">Life</span>
                </div>

                <span className="postTitle"><Link to="/post/:postId" className="link">Lorem ipsum dolor sit amet.</Link></span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit molestias, debitis quod suscipit velit est illo optio dolores ex libero odio, saepe quo qui nihil consectetur, numquam eveniet illum commodi doloribus. Natus nobis impedit pariatur ab id? Aspernatur nobis, culpa libero asperiores pariatur tempora fugit autem recusandae aut? Illo explicabo nihil, officiis ea totam cupiditate nostrum velit non reiciendis quaerat veritatis libero aliquid excepturi nulla enim voluptate expedita doloremque laudantium inventore optio harum vel aperiam temporibus ipsa? Voluptatum itaque iure eveniet rerum assumenda aperiam velit facere obcaecati hic labore!</p>
        </div>
    )
}

export default Post