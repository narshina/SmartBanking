import React from 'react'
import './Home.css'
import { Link, Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <div className='main'>
        <div className='flex justify-center pt-72 gap-8'>
         <Link to='/register'> <button className=' text-white bg-black w-36 h-9 rounded-md'>Register</button></Link>  
          <Link to='/login'>  <button className='text-white bg-black  w-36 h-9 rounded-md'>Login</button></Link>
        </div>
       
    </div>
     
     </>
  )
}
