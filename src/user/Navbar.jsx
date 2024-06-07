import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className='p-7 bg-pink-950 text-white flex justify-between'>
        <div className='font-bold text-[20px]'><i>$MART BANKING</i></div>
        <div className='flex flex-wrap gap-6'>
      <Link to='/user' > <div>HOME</div></Link>
     {/* <Link to='/user/firsttrans' ><div>FIRST DEPOSIT</div></Link> */}
      <Link to='/user/trans'><div>TRANSACTION</div></Link>
      <Link to='/user/history'><div>HISTORY</div></Link>  
  
       <Link to='/user/profile'> <div>PROFILE</div></Link>
        <div>LOG OUT</div>

        </div>
       
    </div>
    
     <Outlet></Outlet>
     </>
  )
}
