'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';

const ButtonJoin = ({ text, user, travel, icon, iconPosition, bgColor = 'bg-blue-900' }) => {
    const supabase = createClientComponentClient();

    

    const joinTravel = async () => {
        // Clone the current joined_users array and add the new user_id
        const updatedJoinedUsers = [...travel.joined_users, user?.user_id];

        // Log the updated array for debugging
        console.log(updatedJoinedUsers);

        // Update the travels table with the new joined_users array
        // await supabase.from('travels').update({ 'joined_users': updatedJoinedUsers }).eq('travel_id', travel.travel_id);
        alert('🚀 You successfully joined the travel!');
    }

    return (
        <button className={`${bgColor} text-white py-2 px-4 rounded-full flex items-center space-x-2`} onClick={joinTravel}>
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
};

export default ButtonJoin;
