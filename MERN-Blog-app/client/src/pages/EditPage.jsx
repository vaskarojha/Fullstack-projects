import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';

function EditPost() {
const {id} = useParams()
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content , setContent] = useState("")
  const [files , setFiles] = useState('')
  const [redirect, setRedirect] =  useState(false)

        useEffect(()=>{
                fetch('http://localhost:4000/post/getPost/'+id)
                .then(response =>response.json())
                .then(currentPost=> {
                        console.log(currentPost)
                        setTitle(currentPost.post.title);
                                        setSummary(currentPost.post.summary);
                                        setContent(currentPost.post.content);
                               })
        }, [])

        function editPost(e){
                e.preventDefault()
                const data = new FormData();
                data.set('title', title)
                data.set('summary', summary)
                data.set('content', content)
                data.set('id', id)
                // data.set('files', files[0])

                if(files?.[0]){
                        data.set('file', files?.[0])
                }
                const apiResponse = fetch('http://localhost:4000/post/updatePost',{
                        method:'PUT',
                        body:data,
                        credentials:'include'
                })
                setRedirect(true)
        }
        if(redirect){
        return <Navigate to= {'/post/'+id}/>
        }

   
  return (
        
        
    <form onSubmit={editPost}>
        <input type="text" 
                placeholder={'title'}
                value={title}
                onChange={e =>setTitle(e.target.value)} />
        <input type="text" 
                placeholder={'summary'} 
                value={summary}
                onChange={e=>setSummary(e.target.value)}/>
        <input type='file'
                onChange={e => setFiles(e.target.files)} />
        <ReactQuill 
                value={content}
                onChange={newValue =>setContent(newValue)}/>
        <button style={{marginTop:'15px', backgroundColor:"gray", color:"white"}}> Update Post</button>
    </form>

  )
}

export default EditPost