// @ts-nocheck
import React from 'react';
import Link from 'next/link';

const TravelCard = ({ travel, vertical}) => {
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

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Link href={`/travel/${travel_id}`} className={`bg-transparent rounded-lg`}>
            {vertical ? (
                <div className="relative flex flex-col bg-black rounded-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden w-[18vw] h-[24vw] mx-[2vw]">
                    <img src={travel_picture} alt='not found' className='absolute inset-0 w-full h-full object-cover opacity-60' />
                    <div className='relative flex flex-col items-start p-4 text-white'>
                        <p className='font-bold text-md text-3xl'>{destination}</p>
                        <div className='flex text-sm border border-slate-500 px-2 py-1 rounded-full mt-4 bg-white text-black items-center'>
                            <p>🔴</p>
                            <p className='ml-2 text-md'>{available_users} plazas disponibles</p>
                        </div>
                        <div className='flex text-xs mt-1'>
                            <p>{formatDate(start_date)}</p>
                            <p className='mx-1'>-</p>
                            <p>{formatDate(end_date)}</p>
                        </div>
                        <div className='flex mt-3'>
                            {joined_users.slice(0, 2).map((user, index) => (
                                <img key={index} src='user_default.jpg' className='size-5 rounded-full mr-2 ' alt='User'/>
                            ))}
                            {joined_users.length > 2 && (
                                <div className='text-white'>
                                    +{joined_users.length - 2}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex bg-white rounded-xl w-[64vw] my-[0.5vw] hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md">
                        <img src={travel_picture} alt='not found' className='w-[500px] h-auto max-h-[140px] object-cover' style={{ borderRadius: '10px 0 0 10px' }} />

                    <div className='flex flex-col justify-start items-start ml-4 mr-12 w-[60%]'>
                        <p className='font-bold text-lg mt-4'>{destination}</p>
                        <div className='flex'>
                            <div className='flex w-full text-sm text-slate-600'>
                                <p>{formatDate(start_date)}</p>
                                <p>-</p>
                                <p>{formatDate(end_date)}</p>
                            </div>
                        </div>
                        <div className='flex text-sm border border-slate-300 px-1 rounded-full mt-1 bg-white text-black items-center'>
                            <p>🔴</p>
                            <p className='ml-2 text-md'>Solo queda {available_users} plaza/s.</p>
                        </div>
                        <div className='flex mt-3 mb-4'>
                            {joined_users.slice(0, 2).map((user, index) => (
                                <img key={index} src='user_default.jpg' className='size-5 rounded-full mr-2' alt='User'/>
                            ))}
                            {joined_users.length > 2 && (
                                <div className='text-white'>
                                    +{joined_users.length - 2}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex text-left w-full flex-col justify-center'>
                        <p className='text-sm font-medium mb-1'>Description</p>
                        <p className='text-xs text-slate-500 my-[1px]'>Día 1: Llegada a {destination}.</p>
                        <p className='text-xs text-slate-500 my-[1px]'>- Mañana: Llegada al aeropuerto internacional de Honolulu.</p>
                        <p className='text-xs text-slate-500 my-[1px]'>- Tarde: Relájate en Waikiki Beach, toma el sol y disfruta de las olas...</p>
                        <p className='text-xs text-slate-500 my-[1px]'>- Noche: Cena en un restaurante local. Prueba el poke, un platillo....</p>
                    </div>
                </div>
            )}
        </Link>
    );
};

export default TravelCard;
