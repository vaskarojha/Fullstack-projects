"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)

    const ticket = {
      title, body, priority,user_email: "sample@email.com"
    }
    const res = await fetch('http://localhost:4000/tickets', {
      method:"POST",
      header: {"Content-Type": "application/json"},
      body:JSON.stringify(ticket)
    })

    if(res.status ==201){
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
      <label htmlFor="">
        <span>Titel:</span>
        <input type="text"
        required
        onChange={(e)=>setTitle(e.target.value)}
        value={title} />
      </label>
      <label htmlFor="">
        <span>Body:</span>
        <input type="text"
        required
        onChange={(e)=>setBody(e.target.value)}
        value={body} />
      </label>
      <label htmlFor="">
        <span>Priority:</span>
        <select type="text"
        required
        onChange={(e)=>setPriority(e.target.value)}
        value={priority}> 
        <option value="low">Low priority</option>
        <option value="medium">Medium priority</option>
        <option value="high">High priority</option>
        </select>
      </label>
      <button 
      className='btn-primary'
      disabled= {isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Create ticket</span>}
        </button>
    </form>
  )
}

export default CreateForm