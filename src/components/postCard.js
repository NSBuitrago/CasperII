import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                <h2 className="post-card-title">{post.title}</h2>
            </header>
        </Link>
    )
}

export default PostCard