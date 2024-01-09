import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content , setContent] = useState("")
  const [files , setFiles] = useState('')
  const [redirect, setRedirect] =  useState(false)
  async function createPost(e){
    const data = new FormData();
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('files', files[0])
    e.preventDefault()
    // console.log(files)
    const response = await fetch('http://localhost:4000/post/create',{
          method:'POST',
          body:data,
          credentials:'include'
        }).then(data =>data.json())
        // console.log(response)
        if(response.success){
                setRedirect(true)
        }
      }
     
      if(redirect){
        return <Navigate to= {'/'}/>
      }

  return (
    <form onSubmit={createPost}>
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
        <button style={{marginTop:'15px', backgroundColor:"gray", color:"white"}}> Create Post</button>
    </form>

  )
}

export default CreatePost