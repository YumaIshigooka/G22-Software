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
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Publish a Travel</h2>

            <div className="mb-4">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                    Destination
                </label>
                <input
                    type="text"
                    name="destination"
                    id="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                    Start Date
                </label>
                <input
                    type="date"
                    name="start_date"
                    id="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
                    End Date
                </label>
                <input
                    type="date"
                    name="end_date"
                    id="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="max_people" className="block text-sm font-medium text-gray-700">
                    Max People
                </label>
                <input
                    type="number"
                    name="max_people"
                    id="max_people"
                    value={formData.max_people}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
                    Cost
                </label>
                <input
                    type="number"
                    name="cost"
                    id="cost"
                    value={formData.cost}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
                Publish Travel
            </button>
        </form>
    );
};

export default PublishTravelForm;
