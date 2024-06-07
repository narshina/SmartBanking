import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Profile = () => {
   let id=localStorage.getItem('id')
   console.log(id);
   const[data,setData]=useState('')

   useEffect(()=>{
    let fetchdata=async()=>{
        let response=await axios.get(`http://localhost:4000/user/vuserdetail/${id}`)
        console.log(response);
        setData(response.data)
    }
    fetchdata()
   },[])



  return (
    <div className='bg'>
        <h1 className='font-bold text-[20px] text-center p-5'>USER PROFILE</h1>
        <div>
            

<div class="relative overflow-x-auto flex justify-center">
    <table class="w-[1000px]  text-left rtl:text-right  dark:text-gray-400 ">
        
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Name
                </th>
                <td class="px-6 py-4">
                    {data.name}
                </td>
               
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Account type
                </th>
                <td class="px-6 py-4">
                    {data.account}
                </td>
               
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 hover:bg-slate-300 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Account Number
                </th>
                <td class="px-6 py-4">
                    {data.acno}
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-b hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Email id
                </th>
                <td class="px-6 py-4">
                    {data.email}
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-b hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Date of birth
                </th>
                <td class="px-6 py-4">
                    {data.dob}
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-b hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Street
                </th>
                <td class="px-6 py-4">
                    {data.street}
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-b hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   City
                </th>
                <td class="px-6 py-4">
                    {data.city}
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-b hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    State 
                </th>
                <td class="px-6 py-4">
                    {data.state}
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-b hover:bg-slate-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Phone Number
                </th>
                <td class="px-6 py-4">
                    {data.phone}
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

        </div>
    </div>
  )
}
