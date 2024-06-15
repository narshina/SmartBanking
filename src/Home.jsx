import React from 'react'
import './Home.css'
import { Link, Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <div className='main'>
    <div className='p-7 bg-black text-white flex justify-between'>
    <div className='font-bold text-[20px]'><i>$MART BANKING</i></div>
    <div className='flex flex-wrap gap-6 text-[20px]'>
    <Link to='/register'> <button className=' text-white bg-black w-36 h-9 rounded-md'>Register</button></Link>  
      <Link to='/login'>  <button className='text-white bg-black  w-36 h-9 rounded-md'>Login</button></Link>
    </div>

    </div>
        <div className='flex justify-center pt-72 gap-8'>
        
        <div className='text-center font-serif text-[40px]  pt-27 animate-fadeIn'><b>Banking at your fingertips, anywhere, anytime</b></div>

        </div>
       
    </div>
     
     </>
  )
}
