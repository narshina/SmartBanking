import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Usermange = () => {
 
  let {id}=useParams()

  const[data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
 let handlesubmit=async(event)=>{
 event.preventDefault('')
 try{
  const response=await axios.put(`http://localhost:4000/user/addacno/${id}`,data)
  console.log(response);
  setData('')
 }
 catch(error){
  console.log("error",error);
 }
 }
 let handleSubmitt=async (statuss)=>{
  try{
    const response=await axios.put(`http://localhost:4000/user/manageuser/${id}`,{status:statuss})
    console.log(response);
    setData('')
  }
  catch(e){
    console.log(e);
  }
 }
 



  return (
    <div className='bg'>
         <Link to='/admin'>  <div className='font-bold pt-7 hover:underline'>HOME</div></Link> 
            <div className='flex justify-center pt-4'>
        <div className='h-[180px] w-[450px]  border border-gray-200 rounded-lg bg-white mt-9'>
          <div className='text-center font-bold text-[20px]'>MANAGE USER</div>

         <form onSubmit={handlesubmit}>
          
          <div className='ml-4'>Account Number</div>
          <input onChange={handleChange}  name='acno' type='text' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='flex justify-center mt-4'>
            <button  onClick={()=>{handleSubmitt('enable')}} type='submit' className='w-80 h-8 bg-neutral-700 text-white'>SUBMIT</button>
          </div>
         </form>
        </div>
</div>

    </div>
  )
}