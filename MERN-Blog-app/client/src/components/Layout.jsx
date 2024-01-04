import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>

        <div>FOOTER</div>
    </main>
  )
}

export default Layout