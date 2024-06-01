import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className='p-7 bg-pink-950 text-white flex justify-between'>
        <div>ONLINE BANKING</div>
        <div className='flex flex-wrap gap-6'>
      <Link to='/user' > <div>HOME</div></Link>
     <Link to='/user/firsttrans' ><div>FIRST DEPOSIT</div></Link>
      <Link to='/user/trans'><div>TRANSACTION</div></Link>  
        <div>PROFILE</div>
        </div>
       
    </div>
    
     <Outlet></Outlet>
     </>
  )
}
