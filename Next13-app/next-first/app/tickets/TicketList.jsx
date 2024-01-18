import React from 'react'
import Link from 'next/link'
 //fetch the data
    async function getTicket(){
        const res = await fetch('http://localhost:4000/tickets',{
            next:{
                revalidate: 10 // check for the change in every 10 seconds otherwise it uses the existing data from cache memory.
            }
        })
        return res.json()
    }
async function TicketList() {
   const tickets = await getTicket()

  return (
    <>
        {tickets.map((ticket)=>(
            <div key={ticket.id} className='card my-5'>
                <Link href= {`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0,200)}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority}   priority
                </div>
                </Link>
            </div>
        )) }
        {tickets.length ===0 && (<p className='text-center'> No open ticket...</p>)}
    </>
  )
}

export default TicketList