import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Usermange = () => {

  let{id}=useParams()
   const[data,setData]=useState('')
   useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get(`http://localhost:4000/user/vuserdetail/${id}`)
        setData(response.data)
      }
      catch(error){
         console.error('error',error)
      }
    }
    fetchData()
   },[])



  return (
    <div className='bg'>
        <div className='flex justify-center pt-4'>
        <div className='h-[650px] w-[450px]  border border-gray-200 rounded-lg bg-white'>
          <div className='text-center font-bold text-[20px]'>MANAGE USER</div>

         <form >
          <div className='mt-5 m-4'>Account Type</div>
          <input  placeholder={data.account} name='account' type='text' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'>

          </input>
          <div className='ml-4'>Name</div>
          <input  placeholder={data.name} name='name' type='text'  className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>Phone number</div>
          <input placeholder={data.phone}  name='phone' type='number' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>Email</div>
          <input placeholder={data.email} name='email' type='email' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>Date of birth</div>
          <input placeholder={data.dob}  name='dob' type='date' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>Street address</div>
          <input placeholder={data.street}  name='street' type='text' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>City</div>
          <input placeholder={data.city}  name='city' type='text' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>State</div>
          <input placeholder={data.state}  name='state' type='text' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='ml-4'>Account Number</div>
          <input  name='accountno' type='text' className='ml-4 bg-gray-50 border border-gray-300 w-96 h-8'></input>
          <div className='flex justify-center mt-4'>
            <button type='submit' className='w-80 h-8 bg-neutral-700 text-white'>SUBMIT</button>
          </div>
         </form>
        </div>
</div>

    </div>
  )
}
