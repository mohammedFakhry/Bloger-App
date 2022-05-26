import React from 'react'
import './singlePost.css'

import postImg from '../../image/post.jpg'


const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={postImg} alt="post images" className="singlePostImg" width="" height="" />

                <h2 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h2>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Jhon</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>

                <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor necessitatibus repellat vel, vitae labore voluptate sapiente consequuntur illum minus rem, nemo excepturi dolorem asperiores sit tempora suscipit sed ex quibusdam. Accusamus alias excepturi quis fuga eaque ipsum exercitationem at consequatur expedita, repellendus rem veniam facilis, enim nobis, animi asperiores repudiandae maxime totam. Aspernatur eum natus dignissimos iure eveniet quis temporibus ut voluptatem deleniti illo et nostrum iusto inventore, deserunt quibusdam magni nisi nam minima exercitationem? Esse labore, accusantium unde doloremque animi assumenda debitis officiis laboriosam, harum reiciendis itaque nemo cupiditate?</p>

            </div>
        </div>
    )
}

export default SinglePost