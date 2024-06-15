import axios from 'axios';
import React, { useState } from 'react'

export const Addcourse = () => {
   
    const[data,setdata]=useState('')
    
    
  const handleChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handlesubmit=async(event)=>{
    event.preventDefault()
    try {
        const response = await axios.post('http://localhost:4000/user/addcourse', data);
        console.log(response);
        setdata(data); 
      } catch (error) {
        console.error('error', error);
      }
    setdata(data)
  }




  return (
    <div className='bg'>
        <div className='text-center pt-3 font-bold'>ADD QUALIFICATION DETAILS</div>
        <div className='text-center '>
            <form onSubmit={handlesubmit}>
            <div className='flex justify-center gap-4 mt-3 h-12'>
        <input onChange={handleChange} name='name' type='text'  placeholder='NAME'></input>
        <input onChange={handleChange} name='email' type='email' placeholder='email'></input><br></br></div>
        <button className='bg-white mt-3 w-10'>+</button>
        <div onChange={handleChange} className='mt-5 flex gap-3 h-12 justify-center'>
        <input onChange={handleChange} name='course' type='text'  placeholder='course name'></input>
        <input onChange={handleChange} name='university' type='text' placeholder='university'></input>
        <input onChange={handleChange} name='year' type='text' placeholder='year'></input>
        <button className='bg-white mt-3 w-10'>-</button>
        <button className='bg-white' type='submit'>Submit</button>
        </div>
        </form>
        </div>
        <div>
            
        </div>
    </div>
  )
}
