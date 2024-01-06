import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
  return (
    <form>
        <input type="text" placeholder={'title'} />
        <input type="text" placeholder={'summary'} />
        <input type='file' />
        <ReactQuill/>
        <button style={{marginTop:'15px', backgroundColor:"gray", color:"white"}}> Create Post</button>
    </form>

  )
}

export default CreatePost