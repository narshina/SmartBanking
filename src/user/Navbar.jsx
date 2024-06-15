import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  let id=localStorage.getItem('id')
  

  const[data,setdata]=useState('')
  const[refresh,setrefresh]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    let token=localStorage.getItem('token')
    let fetchdata=async()=>{
        try{

            let response=await axios.get(`http://localhost:4000/user/view/${id}`,{
                headers:{
                    Authorization:token
                }
            })
            console.log(response);
            setdata(response.data)
        }
        catch(e){

            console.log(e.response.data);
            navigate('/login')
        }
    }
    

        fetchdata()
    
  
},[refresh])

let logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}


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
         <button onClick={logout}>LOGOUT</button>

        </div>
       
    </div>
    
     <Outlet></Outlet>
     </>
  )
}
