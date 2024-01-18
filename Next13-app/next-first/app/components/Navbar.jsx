// import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'
function Navbar() {
  return (
    <nav>
        <Image 
        src = {Logo}
        alt = {'Website Logo'}
        width = {70}
        quality = {100}
        placeholder = 'blur'
        />
    <Link href = '/'>Dashboard</Link>
    <Link href='/tickets'>Tickets</Link>
    <Link href='/tickets/create'>Create Ticket</Link>
    </nav>
  )
}

export default Navbar