import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import CheckOut from './CheckOut'

const Main = () => {
  return (
    <div className='w-full min-h-screen font-sans flex justify-start '>
        <SideBar/>
        <Outlet/>
        <CheckOut/>

    </div>
  )
}

export default Main