import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Leaf Something",
    image: assets.thing2,
    email: 'leafleap@gmail.com',
    phone: '+63 999 999 9999',
    address: {
      line1: "Block something 5",
      line2: "Caloocan City"
    },
    gender: 'Male',
    dob: '2000-01-20'
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleNameChange = (e) => {
    setUserData({
      ...userData,
      name: e.target.value
    });
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <div>
        <img className='w-36 rounded'src={userData.image} alt="Profile" />
        {isEdit ? (
          <input
            className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
            type="text"
            value={userData.name}
            onChange={handleNameChange}
          />
        ) : (
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        )}
        <hr className='bg-zinc-400 h-[1px] border-none'></hr>
        <div>
          <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>
            <p className='font-medium'>Email ID:</p>
            <p className='text-blue-400'>{userData.email}</p>
            <p className='font-medium'>Phone #:</p>
            {isEdit ? (
              <input
                className='bg-gray-100 max-w-52'
                type="text"
                value={userData.phone}
                onChange={handleNameChange}
              />
            ) : (
              <p className='text-blue-400'>{userData.phone}</p>
            )}
            <p className='font-medium'>Address:</p>
            {isEdit ? (
              <input
                className='bg-gray-50'
                type="text"
                value={userData.address.line1}
                onChange={handleNameChange}
              />
            ) : (
              <p className='text-gray-500'>{userData.address.line1}</p>
            )}
            <br/>
            {isEdit ? (
              <input
                className='bg-gray-50'
                type="text"
                value={userData.address.line2}
                onChange={handleNameChange}
              />
            ) : (
              <p className='text-gray-500'>{userData.address.line2}</p>
            )}
          </div>
        </div>
        <div>
          <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>
            <p className='font-medium'>Gender:</p>
            {isEdit ? (
              <select className='max-w-20 bg-gray-20'onChange={(e)=> setUserData(prev=>({...prev,gender: e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option> 
              <option value="Female">Female</option> 
              </select>
            ) : (
              <p className='text-gray-400'>{userData.gender}</p>
            )}
            <p className='font-medium'>Birthday:</p>
            {isEdit ? (
              <input
                className='max-w-28 bg-gray-100'
                type="date"
                value={userData.dob}
                onChange={(e)=> setUserData(prev=>({...prev,dob: e.target.value}))}
              />
            ) : (
              <p className='text-gray-400'>{userData.dob}</p>
            )}
          </div>
        </div>
        <div>
        <button className={'mt-10 border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'}onClick={toggleEdit}>
          {isEdit ? 'Save Information' : 'Edit Information'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
