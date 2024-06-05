import React from 'react';
import { createClient } from 'utils/supabase/server';
import TravelCard from 'src/components/TravelCard';

// This function fetches data for a specific travel based on its ID
export async function fetchTravelById(id) {
    const supabase = createClient();
    const { data, error } = await supabase.from('travels').select().eq('travel_id', id).single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

const TravelPage = async ({ params }) => {
    const { id } = params;

    // Fetch travel data based on the dynamic id
    let travel;
    try {
        travel = await fetchTravelById(id);
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold my-4">Travel Details</h1>
            <pre>{JSON.stringify(travel, null, 2)}</pre>
        </div>
    );
};

export default TravelPage;
