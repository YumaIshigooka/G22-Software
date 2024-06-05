"use client";

import React, { useState, useEffect } from 'react';
import ItineraryCard from 'src/components/ItineraryCard';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

function convertNewlinesToParagraphs(text) {
  if (!text) {
    return null;
  }
  return text.split('\n').map((line, index) => (
    <p key={index} className="text-sm text-slate-600 text-left mt-[2vh]">
      {line}
    </p>
  ));
}

export default function ProfileClient({ user, profileData: initialProfileData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData || {});
  const supabase = createClientComponentClient();

  useEffect(() => {
    setProfileData(initialProfileData || {});
  }, [initialProfileData]);

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

  try {
    const response = await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...profileData, auth_user_id: user.id }),
    });

    if (response.ok) {
      // Reload profile data after successful update
      const { data: updatedProfileData, error } = await supabase
        .from('users')
        .select('*')
        .eq('auth_user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching updated profile data:', error);
      } else {
        setProfileData(updatedProfileData);
        setIsEditing(false);
      }
    } else {
      const errorData = await response.json();
      console.error(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};





  return (
    <div className="flex w-full flex-col">
      <img src="forest.webp" alt="not-found" className="object-cover w-full h-[150px]" style={{ objectPosition: 'center 50%' }} />
      <div className="flex w-full mt-[4vh] px-[6vw] mb-[4vh]">
        <div className="flex">
          <img src={profileData?.profile_picture || 'default_profile_picture.png'} alt="user_profile" className='size-20'/>
          <div className="flex flex-col items-start ml-[2vw]">
            <div className="flex align-middle items-center">
              <p className="text-2xl text-blue-600 font-semibold">{profileData?.name || ''}</p>
              <img src="verified.png" alt="not-found" className="size-6 ml-2" />
            </div>
            <p className="text-sm text-slate-600">{profileData?.user_presentation || ''}</p>
            <p className="text-[10px]">⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <button className="mr-2 border-2 border-blue-600 px-3 py-1 rounded-md text-sm">Mis Viajes</button>
          <div className="flex flex-row">
            <button onClick={handleEditClick} className="flex items-center border-2 border-blue-500 text-white bg-blue-600 px-3 py-1 rounded-md text-sm">
              <img src="edit-text.png" alt="edit" className="w-4 h-4 mr-2 filter invert" />
              Editar perfil
            </button>
          </div>
        </div>
      </div>
      {isEditing ? (
        <form className="flex flex-col px-[6vw]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name" // Update to match database column name
              value={profileData?.name || ''}
              onChange={handleChange}
              className="border-1 border-gray-300 p-2 rounded-md w-full custom-textarea focus:outline-1 focus:outline-gray-100 focus:border-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Tagline</label>
            <input
              type="text"
              name="user_presentation" // Update to match database column name
              value={profileData.user_presentation || ''}
              onChange={handleChange}
              className="border-1 border-gray-300 p-2 rounded-md w-full custom-textarea focus:outline-1 focus:outline-gray-100 focus:border-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">About Me</label>
            <textarea
              name="aboutme_description" // Update to match database column name
              value={profileData.aboutme_description || ''}
              onChange={handleChange}
              className="border-1 border-gray-300 p-2 rounded-md w-full h-[18vh] custom-textarea focus:outline-1 focus:outline-gray-100 focus:border-gray-100"
            />
          </div>
          <div className="flex">
            <button type="submit" className="mr-2 bg-blue-600 text-white px-3 py-1 rounded-md">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-600 text-white px-3 py-1 rounded-md">Cancel</button>
          </div>
        </form>
      ) : (
        <div className="flex w-full bg-slate-100 flex-col">
          <div className="flex w-full bg-slate-200" style={{ height: "1px" }}></div>
          <div className="flex w-full mt-[3vh]">
            <div className="flex flex-col items-start justify-start pl-[4vw]" style={{ flex: '60%' }}>
              <p className="text-md text-blue-600 font-bold">About Me</p>
              {convertNewlinesToParagraphs(profileData?.aboutme_description)}
              <p className="text-md text-blue-600 font-bold mt-[3vh]">Posted Photos</p>
              <p className="text-sm text-slate-600 text-left mt-[2vh]">No photos have been posted yet :(</p>
              <p className="text-md text-blue-600 font-bold mt-[3vh]">Created Itineraries</p>
              {/* Render your ItineraryCards here dynamically */}
            </div>
            <div style={{ flex: '40%' }}>
              <p className="text-md text-blue-600 font-bold text-left ml-[4vw]">Travel History</p>
              <div className="flex ml-[4vw] flex-col">
                {/* Render your ItineraryCards here dynamically */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
