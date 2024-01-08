import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'
import { Link } from 'react-router-dom'

function PostPage() {
    const [post, setPost] = useState(undefined)
    const {userInfo} = useContext(UserContext)
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/post/`+id)
        .then(response=>{ return response.json()})
        .then(data=>setPost(data))
    }, [])
    console.log(post)

  return (
    <div className='post-page'>
      {(userInfo.id===post?.post?.author) && (
        <div className='edit-row'>
          <Link className='edit-btn' to={`/edit/${post?.post?._id}`}>Edit this post</Link>
          <Link className='delete-btn' to={`/delete/${post?.post?._id}`}>Delete this post</Link>
        </div>
      )}
        <div className="image">
            <img src={`http://localhost:4000/${post?.post?.cover}`} alt="" />
        </div>

        <h1>{post?.post?.title}</h1>
        <div dangerouslySetInnerHTML={{__html:(post?.post?.content)}}/>
    </div>
  )
}

export default PostPage