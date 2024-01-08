import React from 'react'
import { Link } from 'react-router-dom'
function Post({_id, title, summary, content, cover, createdAt, updatedAt,author }) {
  console.log(author)
  return (
    <div className= "post">
    <Link to = {`/post/${_id}`}>
        <div className= "image">
          <img src = {`http://localhost:4000/${cover}`}/>
        </div>
    </Link>
    <div className= "texts">
    <Link to = {`/post/${_id}`}>
        <h2>{title}</h2>
    </Link>
    <p className= "info">
      <a className= "author">{author && author.username}</a>
      <time>{createdAt}</time>
    </p>
    <p className= "summary">{summary}</p>
    </div>
  </div>
  )
}

export default Post