import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function LoignPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const login =async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:4000/login", {
      method:'POST',
      body:JSON.stringify({username, password}),
      headers:{'Content-type':'application/json'},
      credentials:'include',
    }).then(data=>data.json())
    console.log(response)

    if(response['success'] === true){
      return setRedirect(true)
    }else{
      alert(response.message)
      return <Navigate to = {'/register'}/>
    }
      
    
  }
  if(redirect){
    return <Navigate to = {'/'}/>
  }
  return (
    <form className  = "login" onSubmit={login}>
      <h2>Login</h2>
        <input type='text' value={username} onChange={e=>setUsername(e.target.value)} placeholder='username'/>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/>
        <button>Login</button>
    </form>
  )
}

export default LoignPage