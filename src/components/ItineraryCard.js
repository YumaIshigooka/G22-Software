import React from 'react';
import Link from 'next/link';

const ItineraryCard = ({travel, style}) => {

    const {
        travel_id,
        destination,
        start_date,
        end_date,
        max_people,
        joined_users,
        description,
        available_users,
        rating,
        cost,
        travel_picture
    } = travel;

    let color;
    if (travel.available_users > 5) {
        color = 'MediumSeaGreen';
    } else if (travel.available_users > 2) {
        color = 'orange';
    } else {
        color = 'red';
    }

    return (
    <Link href={`/travel/${travel_id}`}>
        <div className="flex bg-white rounded-xl w-[28vw] hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md">
        <img
            src={travel_picture}
            alt='not found'
            className='h-20 w-28'
            style={{ borderRadius: '10px 0 0 10px' }}
        />
        <div className='flex w-full flex-col justify-start items-start ml-4 mr-12'>
            <p className='font-bold text-md'>{destination}</p>
            <div className='flex'>
            <div className='flex w-full text-sm text-slate-600'>
                <p>{start_date}</p>
                <p>-</p>
                <p>{end_date}</p>
            </div>
            </div>
            {style == 1 && (
            <div className='flex text-sm border border-slate-500 px-2 rounded-full mt-2'>
            <svg height="20" width="20">
                <circle cx="10" cy="10" r="4" fill={color} />
            </svg>
                <p className='ml-2 mt'>Solo queda {available_users} plazas.</p>
            </div>
            )}
        </div>
        {style == 2 && (
            <div className='flex justify-center items-center align-middle flex-col w-[60%]'>
            <p className='text-xl font-light mb-1'>{rating}/5</p>
            <div className='flex justify-center'>
                {Array(rating).fill('⭐').map((star, index) => (
                <span key={index} className='text-xs'>{star}</span>
                ))}
            </div>
            </div>
        )}
        </div>
    </Link>
    );

};

export default ItineraryCard;
