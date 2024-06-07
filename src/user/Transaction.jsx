import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Transaction = () => {
  const id = localStorage.getItem('id');
  
  const [data, setData] = useState(''); 
  const [userdata, setUserata] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/vuserdetail/${id}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  console.log(id);

  const handleChange = (event) => {
    setUserata({ ...userdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newAmount = parseFloat(data.amount) + parseFloat(userdata.trans);
      const response = await axios.post('http://localhost:4000/user/deposit', { ...userdata, amount: newAmount, userId: id, types: "deposit" });
      const resp = await axios.put(`http://localhost:4000/user/editbalance/${id}`, { amount: newAmount });
      console.log(response);
      console.log(resp);
      setData({ ...data, amount: newAmount });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmitt = async (event) => {
    event.preventDefault();
    const transactionAmount = parseFloat(userdata.trans);
    const currentAmount = parseFloat(data.amount);
    if (transactionAmount > currentAmount) {
      alert('Insufficient balance');
      return;
    }
    try {
      const newAmount = currentAmount - transactionAmount;
      const responses = await axios.post('http://localhost:4000/user/deposit', { ...userdata, amount: newAmount, userId: id, types: "withdraw" });
      const resps = await axios.put(`http://localhost:4000/user/editbalance/${id}`, { amount: newAmount });
      console.log(resps);
      console.log(responses);
      setData({ ...data, amount: newAmount });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className='bg'>
      <div className='flex flex-col items-center'>
        <div className='font-bold font-serif pt-5 text-[25px]'>
          BALANCE
        </div>
        <input
          className='input-field mt-2 mb-5'
          value={data?.amount}
          readOnly
        />
      </div>
      <h1 className='font-bold font-serif text-center pt-5 text-[25px]'>TRANSACTION</h1>
      <form>
        <div className='form-container'>
          <div className='input-group'>
            <input onChange={handleChange} name='trans' type='number' className='input-field' placeholder='Enter your amount' />
            <button onClick={handleSubmit} type='submit' className='btn bg-pink-950 text-white'>DEPOSIT</button>
          </div>
          <div className='input-group'>
            <input onChange={handleChange} name='trans' type='number' className='input-field' placeholder='Enter your amount' />
            <button onClick={handleSubmitt} type='submit' className='btn bg-pink-950 text-white'>WITHDRAW</button>
          </div>
        </div>
      </form>
    </div>
  );
};
