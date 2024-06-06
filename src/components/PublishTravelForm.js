// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PublishTravelForm = ({ user_id }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        destination: '',
        start_date: '',
        end_date: '',
        max_people: '',
        description: '',
        cost: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/travel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, creator_id: user_id }),
            });

            if (response.ok) {
                const responseData = await response.json();
                router.push(`/travel/${responseData.id}`); // Redirect to the new travel page
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto bg-white p-20 rounded-lg my-20 shadow-md">
            <h2 className="text-3xl font-medium text-center text-gray-900 mb-6">Publish a Travel</h2>

            <div className="mb-6">
                <label htmlFor="destination" className="block text-lg font-medium text-gray-800 mb-2">
                    Destination
                </label>
                <input
                    type="text"
                    name="destination"
                    id="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="start_date" className="block text-lg font-medium text-gray-800 mb-2">
                    Start Date
                </label>
                <input
                    type="date"
                    name="start_date"
                    id="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="end_date" className="block text-lg font-medium text-gray-800 mb-2">
                    End Date
                </label>
                <input
                    type="date"
                    name="end_date"
                    id="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="max_people" className="block text-lg font-medium text-gray-800 mb-2">
                    Max People
                </label>
                <input
                    type="number"
                    name="max_people"
                    id="max_people"
                    value={formData.max_people}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-2">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
            </div>

            <div className="mb-6">
                <label htmlFor="cost" className="block text-lg font-medium text-gray-800 mb-2">
                    Cost
                </label>
                <input
                    type="number"
                    name="cost"
                    id="cost"
                    value={formData.cost}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600">
                Publish Travel
            </button>
        </form>

    );
};

export default PublishTravelForm;
