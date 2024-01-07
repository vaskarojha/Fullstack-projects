import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
function IndexPage() {
  const [posts, setPosts] = useState('')
  useEffect(()=>{
    const response = fetch('http://localhost:4000/post').then(data =>{
      data.json().then(posts =>{
        setPosts(posts)
      })
    })
  }, [])
  return (
    <div>
      {posts.length > 0 && posts.map(post =>(
        <Post {...post}/>
      ))}
        
    </div>
  )
}

export default IndexPage