// @ts-nocheck
import React from 'react';
import Link from 'next/link';

const TravelCard = ({ travel, vertical }) => {
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
        cost
    } = travel;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const cardClass = vertical ? 'h-64 w-1/3' : 'h-auto w-full';
    const containerClass = vertical ? 'flex flex-col space-y-2' : 'text-gray-700 mt-2';

    return (
        <Link href={`/travel/${travel_id}`} className={`bg-white border border-gray-300 rounded-lg shadow p-6 m-4 ${cardClass}`}>
            <h2 className="text-xl font-semibold text-gray-800">{destination}</h2>
            <p className="text-gray-600">{formatDate(start_date)} - {formatDate(end_date)}</p>
            <div className={containerClass}>
                <p>Max people: {max_people}</p>
                <p>Joined users: {joined_users.length}</p>
                <p>Available slots: {available_users}</p>
                {description && <p>Description: {description}</p>}
                {rating && <p>Rating: {rating} / 5</p>}
                {cost && <p>Cost: ${cost}</p>}
            </div>
        </Link>
    );
};

export default TravelCard;
