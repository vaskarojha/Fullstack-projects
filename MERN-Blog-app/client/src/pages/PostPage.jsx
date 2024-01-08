import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PostPage() {
    const [post, setPost] = useState(undefined)
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/post/`+id)
        .then(response=>{ return response.json()})
        .then(data=>setPost(data))
    }, [])
    console.log(post?.post?.title)

  return (
    <div className='post-page'>
        <div className="image">
            <img src={`http://localhost:4000/${post?.post?.cover}`} alt="" />
        </div>
        <h1>{post?.post?.title}</h1>
        <div dangerouslySetInnerHTML={{__html:(post?.post?.content)}}/>
    </div>
  )
}

export default PostPage