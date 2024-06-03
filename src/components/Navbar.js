// @ts-ignore
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Button from './Button';
import User from './User';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar = ({ user, background = 'white' }) => {
    const [bgColor, setBgColor] = useState(background);
    const router = useRouter();  // Create router instance

    return (
        <nav className={`flex justify-between items-center p-4 py-2 w-full ${bgColor === 'white' ? 'bg-white' : 'bg-blue-600'}`}>
            <div className="logo">
                <Link href={'/'}><img src="/logo.svg" alt="Logo" /></Link>
            </div>
            <div className="search-bar w-1/2">
                <SearchBar />
            </div>
            <div className="user-info">
                {user ? (
                    <div className="flex items-center space-x-2">
                        <Button text="Action" onClick={() => console.log('Clicked!')} icon="🚀" iconPosition="right" />
                        <Link href={'/profile'}>
                            <User photo={user.photo} name={user.email} description={user.description} />
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <Button text="Login" onClick={() => router.push('/sign-in')} bgColor="bg-transparent" icon={undefined} iconPosition={undefined} />
                        <Button text="Register" onClick={() => router.push('/sign-up')} bgColor="bg-blue-900" icon={undefined} iconPosition={undefined} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
