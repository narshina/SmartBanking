import axios from 'axios'
import React, { useState } from 'react'

export const Firsttrans = () => {
    let id=localStorage.getItem('id')
    const[data,setData]=useState('')

    let handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
        console.log(data);
    }
    let handlesubmit=async(event)=>{
        event.preventDefault('')
        try{
            const response=await axios.post('http://localhost:4000/user/firstdep',{...data,userId:id})
            console.log(response);
            setData(data)
        }
        catch(error){
            console.error("error",error)
        }
        
    }
      return (
    <div className='bg'>
    <h1 className='font-bold font-serif text-center pt-5 text-[25px]'>TRANSACTION</h1>
<form onSubmit={handlesubmit}>
    <div className='form-container '>
      <div className='input-group'>
        <input onChange={handlechange} name='amount' type='number' className='input-field' placeholder='Enter your amount' />
        <button type='submit' className='btn bg-pink-950 text-white'>DEPOSIT</button>
      </div>
     
    </div>
    </form>
  </div>
  )
}
