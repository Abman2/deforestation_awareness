import React from 'react'
import { Outlet } from 'react-router'
import { NavBar } from '../components/static components/NavBar'
import Footer from '../components/static components/Footer'

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
        <NavBar/>
       <div className='flex-grow'> <Outlet/></div>
        <Footer/>
    </div>
  )
}
