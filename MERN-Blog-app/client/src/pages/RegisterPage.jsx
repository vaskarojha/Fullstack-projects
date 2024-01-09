import React, {useState} from 'react'


function RegisterPage() {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function register(e){
  e.preventDefault()
  await fetch('http://localhost:4000/user/register', {
    method:'POST',
    body: JSON.stringify({username, password}),
    headers:{"Content-type": "application/json"}
  })
  // const data = await response.json()
  // console.log(data)
}

  return (
    <form className  = "register" onSubmit={register}>
    <h2>Register</h2>
      <input type='text' 
          placeholder='username'
          value = {username}
          onChange={(e)=>setUsername(e.target.value)}
      />
      <input type='password' 
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
      <button>Register</button>
  </form>
  )
}

export default RegisterPage