import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const AdminHome = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/vuser');
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (userId, statuss) => {
        try {
            const response = await axios.put(`http://localhost:4000/user/manageuser/${userId}`, { status: statuss });
            console.log(response);
            setData(data.map(item => item._id === userId ? { ...item, status: statuss } : item)); // Update the state to reflect the status change
        } catch (error) {
            console.error('Error updating user status:', error);
        }
    };

    return (
        <div className='bg'>
            <div className='font-bold pt-7'>HOME</div>
            <div className='text-center font-serif text-[25px]'>USER DETAILS</div>
            <div className='relative overflow-x-auto'>
                <table className='w-[1500px] m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>ACCOUNT TYPE</th>
                            <th scope='col' className='px-6 py-3'>NAME</th>
                            <th scope='col' className='px-6 py-3'>PHONE NUMBER</th>
                            <th scope='col' className='px-6 py-3'>EMAIL</th>
                            <th scope='col' className='px-6 py-3'>STREET</th>
                            <th scope='col' className='px-6 py-3'>CITY</th>
                            <th scope='col' className='px-6 py-3'>STATE</th>
                            <th scope='col' className='px-6 py-3'>STATUS</th>
                            <th scope='col' className='px-6 py-3'>ACTION</th>
                            <th scope='col' className='px-6 py-3'>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{item.account}</th>
                                <td className='px-6 py-4'>{item.name}</td>
                                <td className='px-6 py-4'>{item.phone}</td>
                                <td className='px-6 py-4'>{item.email}</td>
                                <td className='px-6 py-4'>{item.street}</td>
                                <td className='px-6 py-4'>{item.city}</td>
                                <td className='px-6 py-4'>{item.state}</td>
                                <td className='px-6 py-4'>{item.status}</td>
                                <td className='px-6 py-4 flex justify-between'>
                                    <button onClick={() => handleSubmit(item._id, "disable")} className='font-medium text-red-600 hover:underline'>Disable</button>
                                    <Link to={`/admin/usermanage/${item._id}`}><button className='font-medium text-green-500 hover:underline'>Enable</button></Link>
                                </td>
                                <td className='px-6 py-4'>
                                    <button className='font-medium text-blue-600 hover:underline'>More</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
