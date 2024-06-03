import React from 'react';

const ItinerayCard = ({image, title, depart_date, return_date, places}) => {
    return (
        <div className="flex bg-white rounded-xl">
            <img src={image} alt='not found' className='h-20 w-auto' style={{ borderRadius: '10px 0 0 20px' }}></img>
            <div className='flex w-full flex-col justify-start items-start ml-4 mr-12'>
                <p className='font-bold text-md'>{title}</p>
                <div className='flex'>
                    <div className='flex w-full text-sm text-slate-600'><p>{depart_date}</p><p>-</p><p>{return_date}</p></div>
                </div>
                <div className='flex text-sm border border-slate-500 px-2 rounded-full mt-2'>
                    <p>🔴</p>
                    <p className='ml-2 mt'>Solo queda {places} plazas.</p>
                </div>
            </div>
        </div>
    );
};

export default ItinerayCard;
