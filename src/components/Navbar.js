'use client';
import React, { useState } from 'react';
import Button from './Button';
import User from './User';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar = ({ user, background = 'white' }) => {
    // @ts-ignore
    const [bgColor, setBgColor] = useState(background);
    return (
        <nav className={`flex justify-between items-center p-4 py-2 w-full ${bgColor === 'white' ? 'bg-white' : 'bg-blue-600'}`}>
            <div className="logo">
                <Link href={'/'}><img src="/logo.svg" alt="Logo" /></Link>
            </div>
            <div className="search-bar w-1/2 outline-cyan-500">
                <SearchBar />
            </div>
            <div className="user-info">
                {user ? (
                    <div className="flex items-center space-x-2">
                        <Button text="Action" onClick={() => console.log('Clicked!')} icon="🚀" iconPosition="right" />
                        <User photo={user.photo} name={user.email} description={user.description} />
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <Button text="Login" onClick={() => console.log('Login')} bgColor="bg-green-500" icon={undefined} iconPosition={undefined} />
                        <Button text="Register" onClick={() => console.log('Register')} bgColor="bg-purple-500" icon={undefined} iconPosition={undefined} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
