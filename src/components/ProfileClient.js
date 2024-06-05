"use client";

import React, { useState } from 'react';
import ItineraryCard from 'src/components/ItineraryCard';

function convertNewlinesToParagraphs(text) {
  return text.split('\n').map((line, index) => (
    <p key={index} className="text-sm text-slate-600 text-left mt-[2vh]">
      {line}
    </p>
  ));
}

export default function ProfileClient({ user, profileData: initialProfileData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profileData);
    setIsEditing(false);
  };

  return (
    <div className='flex w-full flex-col'>
      <img src='forest.webp' alt='not-found' className='object-cover w-full h-[150px]' style={{ objectPosition: 'center 50%' }}></img>
      <div className='flex w-full mt-[4vh] px-[6vw] mb-[4vh]'>
        <div className='flex'>
          <img src='' alt='user_profile'></img>
          <div className='flex flex-col items-start ml-[2vw]'>
            <div className='flex align-middle items-center'>
              <p className='text-2xl text-blue-600 font-semibold'>{profileData.name}</p>
              <img src='verified.png' alt='not-found' className='size-6 ml-2'></img>
            </div>
            <p className='text-sm text-slate-600'>{profileData.tagline}</p>
            <p className='text-[10px]'>⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className='flex items-center ml-auto'>
          <button className='mr-2 border-2 border-blue-600 px-3 py-1 rounded-md text-sm'>Mis Viajes</button>
          <div className='flex flex-row'>
            <button onClick={handleEditClick} className='flex items-center border-2 border-blue-500 text-white bg-blue-600 px-3 py-1 rounded-md text-sm'>
              <img src='edit-text.png' alt='edit' className='w-4 h-4 mr-2 filter invert'></img>
              Editar perfil
            </button>
          </div>
        </div>
      </div>
      {isEditing ? (
        <form className='flex flex-col px-[6vw]' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Name</label>
            <input
              type='text'
              name='name'
              value={profileData.name}
              onChange={handleChange}
              className='border-1 border-gray-300 p-2 rounded-md w-full custom-textarea focus:outline-1 focus:outline-gray-100 focus:border-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Tagline</label>
            <input
              type='text'
              name='tagline'
              value={profileData.tagline}
              onChange={handleChange}
              className='border-1 border-gray-300 p-2 rounded-md w-full custom-textarea focus:outline-1 focus:outline-gray-100 focus:border-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>About Me</label>
            <textarea
              name='about'
              value={profileData.about}
              onChange={handleChange}
              className='border-1 border-gray-300 p-2 rounded-md w-full h-[18vh] custom-textarea focus:outline-1 focus:outline-gray-100 focus:border-gray-100'
            />
          </div>
          <div className='flex'>
            <button type='submit' className='mr-2 bg-blue-600 text-white px-3 py-1 rounded-md'>Save</button>
            <button type='button' onClick={() => setIsEditing(false)} className='bg-gray-600 text-white px-3 py-1 rounded-md'>Cancel</button>
          </div>
        </form>
      ) : (
        <div className='flex w-full bg-slate-100 flex-col'>
          <div className='flex w-full bg-slate-200' style={{ height: "1px" }}></div>
          <div className='flex w-full mt-[3vh]'>
            <div className='flex flex-col items-start justify-start pl-[4vw]' style={{ flex: '60%' }}>
              <p className='text-md text-blue-600 font-bold'>About Me</p>
              {convertNewlinesToParagraphs(profileData.about)}
              <p className='text-md text-blue-600 font-bold mt-[3vh]'>Posted Photos</p>
              <p className='text-sm text-slate-600 text-left mt-[2vh]'>No photos have been posted yet :(</p>
              <p className='text-md text-blue-600 font-bold mt-[3vh]'>Created Itineraries</p>
              <div className='mb-[3vh] mt-[3vh]'>
                <ItineraryCard 
                  image="hawaii_compressed.webp"
                  title="Hawaii"
                  depart_date="2024-07-01"
                  return_date="2024-07-15"
                  places="5"
                  history={false}
                />
              </div>
            </div>
            <div style={{ flex: '40%' }}>
              <p className='text-md text-blue-600 font-bold text-left ml-[4vw]'>Travel History</p>
              <div className='flex ml-[4vw] flex-col'>
                <div className='mt-[3vh] flex'>
                  <ItineraryCard 
                    image="vietnam_compressed.webp"
                    title="Vietnam"
                    depart_date="2024-07-01"
                    return_date="2024-07-15"
                    places="5"
                    history={true}
                    valoration={4}
                  />
                </div>
                <div className='mt-[3vh] flex'>
                  <ItineraryCard 
                    image="congo_compressed.webp"
                    title="Congo Exploration"
                    depart_date="2024-07-01"
                    return_date="2024-07-15"
                    places="5"
                    history={true}
                    valoration={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
