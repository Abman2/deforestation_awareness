import React from 'react'
import { Outlet } from 'react-router'
import { NavBar } from '../components/static components/NavBar'
import Footer from '../components/static components/Footer'

export const RootLayout = () => {
  return (
    <div className='w-full'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
