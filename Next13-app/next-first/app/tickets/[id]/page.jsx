import { notFound } from 'next/navigation'
import React from 'react'

export const dynamicParams = true 

async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()

    return tickets.map((ticket)=>({
        id:ticket.id
    }))
}

async function getTicket(id){
    const res = await fetch('http://localhost:4000/tickets/'+id,{
        next:{
            revalidate: 39 // check for the change in every 30 seconds otherwise it uses the existing data from cache memory.
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}

async function TicketDetails({params}) {
    const ticket = await getTicket(params.id)
  return (
    <main>
        <nav>
            <h2>Ticket details</h2>
        </nav>
        
        <div className="cart">
            <h3>{ticket.title}</h3>
            <small>Created by: {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                    {ticket.priority}   priority
            </div>
        </div>
    </main>
  )
}

export default TicketDetails