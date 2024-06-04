import React from 'react';

const ItineraryCard = ({ image, title, depart_date, return_date, places="0", history, valoration = 0 }) => {
    return (
        <div className="flex bg-white rounded-xl w-[28vw] hover:cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md">
            <img src={image} alt='not found' className='h-20 w-28' style={{ borderRadius: '10px 0 0 20px' }}></img>
            <div className='flex w-full flex-col justify-start items-start ml-4 mr-12'>
                <p className='font-bold text-md'>{title}</p>
                <div className='flex'>
                    <div className='flex w-full text-sm text-slate-600'>
                        <p>{depart_date}</p>
                        <p>-</p>
                        <p>{return_date}</p>
                    </div>
                </div>
                {!history && (
                    <div className='flex text-sm border border-slate-500 px-2 rounded-full mt-2'>
                        <p>🔴</p>
                        <p className='ml-2 mt'>Solo queda {places} plazas.</p>
                    </div>
                )}
            </div>
            {history && (
                <div className='flex justify-center items-center align-middle flex-col w-[60%]'>
                    <p className='text-xl font-light mb-1'>{valoration}/5</p>
                    <div className='flex justify-center'>
                        {Array(valoration).fill('⭐').map((star, index) => (
                            <span key={index} className='text-xs'>{star}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItineraryCard;
