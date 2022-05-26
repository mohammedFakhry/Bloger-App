import React, { memo } from 'react'
import Post from '../post'
import './posts.css'

const Posts = () => {
    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default memo(Posts)