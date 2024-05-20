import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AdminHome = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
     const fetchData=async()=>{
       try{
         const response=await axios.get('http://localhost:4000/user/vuser')
         setData(response.data)
       }
       catch(error){
          console.error('error',error)
       }
     }
     fetchData()
    },[])
    console.log(data);
 


  return (
    <div className='bg'>
        <div className='font-bold pt-7'>HOME</div>
        <div className='text-center font-serif text-[25px]'>USER DETAILS</div>
        

<div class="relative overflow-x-auto">
    <table class="w-[1500px] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   ACCOUNT TYPE                </th>
                <th scope="col" class="px-6 py-3">
                   NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE NUMBER
                </th>
                <th scope="col" class="px-6 py-3">
                    EMAIL
                </th>
                <th scope="col" class="px-6 py-3">
                    STREET
                </th>
                <th scope="col" class="px-6 py-3">
                    CITY
                </th>
                <th scope="col" class="px-6 py-3">
                    STATE
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                <th scope="col" class="px-6 py-3">
                    DETAILS
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((items)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {items.account}
                </th>
                <td class="px-6 py-4">
                    {items.name}
                </td>
                <td class="px-6 py-4">
                    {items.phone}
                </td>
                <td class="px-6 py-4">
                    {items.email}
                </td>
                <td class="px-6 py-4">
                    {items.street}
                </td>
                <td class="px-6 py-4">
                    {items.city}
                </td>
                <td class="px-6 py-4">
                    {items.state}
                </td>
                <td class="px-6 py-4">
                    disable
                </td>
                <td class="px-6 py-4 flex justify-between">
                    <a href="#" class="font-medium text-red-600  hover:underline">Disable</a>
                <Link to='/usermanage'   > <a href="#" class="font-medium text-green-500  hover:underline">Unable</a></Link>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">More</a>
                </td>
            </tr>
           ))}
            
        </tbody>
    </table>
</div>

    </div>
  )
}
