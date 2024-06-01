import axios from 'axios'
import React, { useState } from 'react'

export const Transaction = () => {
  let id = localStorage.getItem('id')
  const [data, setData] = useState({ amount: '', type: '' })

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event, type) => {
    event.preventDefault()
    try {
      const response = await axios.put(`http://localhost:4000/user/transaction/${id}`, { ...data, type })
      console.log(response)
      setData({ amount: '', type: '' })
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className='bg'>
      <h1 className='font-bold font-serif text-center pt-5 text-[25px]'>TRANSACTION</h1>
      <form onSubmit={(event) => handleSubmit(event, data.type)}>
        <div className='form-container '>
          <div className='input-group'>
            <input onChange={handleChange} name='amount' type='number' className='input-field' placeholder='Enter your amount' />
            <button type='submit' onClick={(event) => handleSubmit(event, 'deposit')} className='btn bg-pink-950 text-white'>DEPOSIT</button>
          </div>
          <div className='input-group'>
            <input onChange={handleChange} name='amount' type='number' className='input-field' placeholder='Enter your amount' />
            <button type='submit' onClick={(event) => handleSubmit(event, 'withdraw')} className='btn bg-pink-950 text-white'>WITHDRAW</button>
          </div>
        </div>
      </form>
    </div>
  )
}
