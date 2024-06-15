import React, { useEffect, useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const [data, setData] = useState(''); 


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/user/register', {...data,usertype:'user'});
      console.log(response);
      setData(data); 
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="main h-[750px]">
      <Link to="/">
        <button className="p-5">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
          </svg>
        </button>
      </Link>
      <div className="flex justify-center">
        <div className="h-[650px] w-[450px] border border-gray-200 rounded-lg bg-white">
          <div className="text-center font-bold text-[20px]">REGISTRATION FORM</div>

          <form onSubmit={handleSubmit}>
            <div className="mt-5 m-4">Account Type</div>
            <select onChange={handleChange} name="account" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8">
              <option value="current">Current Account</option>
              <option value="savings">Savings Account</option>
              <option value="fixed">Fixed deposit Account</option>
              <option value="recurring">Recurring deposit Account</option>
            </select>
            <div className="ml-4">Name</div>
            <input onChange={handleChange} name="name" type="text" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">Phone number</div>
            <input onChange={handleChange} name="phone" type="number" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">Email</div>
            <input onChange={handleChange} name="email" type="email" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">Date of birth</div>
            <input onChange={handleChange} name="dob" type="date" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">Street address</div>
            <input onChange={handleChange} name="street" type="text" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">City</div>
            <input onChange={handleChange} name="city" type="text" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">State</div>
            <input onChange={handleChange} name="state" type="text" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="ml-4">Password</div>
            <input onChange={handleChange} name="password" type="password" className="ml-4 bg-gray-50 border border-gray-300 w-96 h-8" />
            <div className="flex justify-center mt-4">
              <button type="submit" className="w-80 h-8 bg-neutral-700 text-white">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
