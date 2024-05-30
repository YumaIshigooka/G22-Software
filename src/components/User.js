import React from 'react';

const User = ({ photo, name, description }) => {
    return (
        <div className="flex items-center space-x-2">
            <img src={photo} alt={name} className="w-10 h-10 rounded-full" />
            <div>
                <div className="text-white text-sm">{name}</div>
                <div className="text-white text-xs">Status: {description}</div>
            </div>
        </div>
    );
};

export default User;
