import React from 'react';

const Button = ({ text, onClick, icon, iconPosition, bgColor = 'bg-blue-900' }) => {
    return (
        <button className={`${bgColor} text-white py-2 px-4 rounded-full flex items-center space-x-2`} onClick={onClick}>
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
};

export default Button;
