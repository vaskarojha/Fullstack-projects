import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'
import { Link } from 'react-router-dom'

function PostPage() {
    const [post, setPost] = useState(undefined)
    const [redirect, setRedirect] = useState(false)
    const {userInfo} = useContext(UserContext)
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/post/getPost/`+id)
        .then(response=>{ return response.json()})
        .then(data=>setPost(data))
    }, [])
    console.log(post)
    function deletePost(e){
      e.preventDefault()
      fetch('http://localhost:4000/post/deletePost/'+id, {
          method:'DELETE',
          credentials:'include'
      })
      .then(response=> {return response.json()})
      .then(setRedirect(true))
    }
    if(redirect){
      return <Navigate to= {'/'}/>
    }

  return (
    <div className='post-page'>
      {(userInfo.id===post?.post?.author) && (
        <div className='edit-row'>
          <Link className='edit-btn' to={`/edit/${post?.post?._id}`}>Edit this post</Link>
          <Link className='delete-btn' onClick={deletePost}>Delete this post</Link>
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