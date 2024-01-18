import React from 'react'
import TicketList from './TicketList'

function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently opened tickets.</small></p>
        </div>
      </nav>
      <TicketList/>
    </main>
  )
}

export default Tickets