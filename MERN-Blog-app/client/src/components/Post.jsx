import React from 'react'

function Post({title, summary, content, cover, createdAt, updatedAt,author }) {
  console.log(author)
  return (
    <div className= "post">
    <div className= "image">
      <img src = {`http://localhost:4000/${cover}`}/>
    </div>
    <div className= "texts">
    <h2>{title}</h2>
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