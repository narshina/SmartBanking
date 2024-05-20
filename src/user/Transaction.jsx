import React from 'react'

export const Transaction = () => {
  return (
    <div className='bg'>
      <h1 className='font-bold font-serif text-center pt-5 text-[25px]'>TRANSACTION</h1>
      <div className='form-container '>
        <div className='input-group'>
          <input className='input-field' placeholder='Enter your amount' />
          <button className='btn bg-pink-950 text-white'>DEPOSIT</button>
        </div>
        <div className='input-group'>
          <input className='input-field' placeholder='Enter your amount' />
          <button className='btn  bg-pink-950 text-white'>WITHDRAW</button>
        </div>
      </div>
    </div>
  )
}
