import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
function Header() {
  const {userInfo, setUserInfo} = useContext(UserContext)
  
  // const [username, setUsername] = useState(null);
  useEffect(()=>{
     fetch('http://localhost:4000/profile', {
      credentials:'include',
    }).then(response =>{
      response.json().then(userData => {
        setUserInfo(userData.username)
      
      })
    })
  }, [])

  const logout =async ()=>{
    await fetch('http://localhost:4000/logout', {
      method:'POST',
      credentials:'include',
    });
    setUserInfo(null)
  }
  const username = userInfo?.username;
  return (
    <header>
    <Link to = "/" className = "logo"> DailyBlog</Link>
    <nav>
      {username && 
      <>
      <Link to={'/createPost'}> <span>Welcome, <b>{username}</b> </span> {"  "}| Add post</Link>
      <Link onClick={logout}>| Logout</Link>
      </>
      }
      {!username && 
      <>
      <Link to= "/login">Login</Link>
      <Link to = "/register">Register</Link>
      </>
      }
    
    </nav>
  
    </header>
  )
}

export default Header