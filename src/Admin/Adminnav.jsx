import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Adminnav = () => {
  return (
    <>
    <div className='p-7 bg-pink-950 text-white flex justify-between'>
        <div>ONLINE BANKING</div>
        <div className='flex flex-wrap gap-6'>
      <Link to='/' > <div>HOME</div></Link>
     <div>USER</div> 
        </div>
       
    </div>
    <Outlet></Outlet>
     </>
  )
}
