import React, { useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const navigate=useNavigate()
    const[data,setData]=useState('')
    let handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    let handlesubmit=async(event)=>{
        event.preventDefault('')

        let response=await axios.post('http://localhost:4000/user/login',data)
        console.log(response);
        if(response.data){
            localStorage.setItem('id',response.data._id)
            localStorage.setItem('email',response.data.email)
           if(response.data.usertype=='admin'){
            navigate('/admin')
           }
           if(response.data.usertype=='user'){
            navigate('/user')
           }
            
        }


        setData(data)
        console.log(data);
    }
  return (
    <div className='main'>
        <div className='p-32'>
        <Link to='/'>  <button className='p-5'>
      <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
    <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
</svg>
</button></Link>

        <div class="w-full h-[358px] bg-white m-auto pt-9   md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border rounded-md">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-[450px]">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login here
              </h1>
              <form onSubmit={handlesubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">USERNAME</label>
                      <input onChange={handlechange} type="email" name="email"  class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PASSWORD</label>
                      <input onChange={handlechange} type="password" name="password"  class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                  </div>
                  <button type="submit" class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  
              </form>
          </div>
      </div>
        </div>
    </div>
  )
}
