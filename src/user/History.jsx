import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const History = () => {
  let id=localStorage.getItem('id')
  const[data,setData]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response =await axios.get(`http://localhost:4000/user/vbalance/${id}`)
        setData(response.data)
        console.log(response);
      }
      catch(e){
        console.log("error",e);
      }
    }
    fetchData()
  },[id])



  return (
    <div className='bg'>
      <div className='text-center font-bold p-5 text-[20px]'>TRANSACTION HISTORY</div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 flex justify-center">
        <table className="w-[1200px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Transaction amount
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction Type
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item)=>(
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.trans}
              </th>
              <td className="px-6 py-4">
                {item.types}
              </td>
              <td className="px-6 py-4">
                {item.amount}
              </td>
              <td className="px-6 py-4">
              {(new Date(item.date)).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
