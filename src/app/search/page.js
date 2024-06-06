// @ts-nocheck
import React from 'react';
import { createClient } from 'utils/supabase/server';
import TravelCard from 'src/components/TravelCard';

const SearchPage = async (searchParams) => {

    const destination = searchParams.searchParams.destination;

    console.log();

    const supabase = createClient();
    // Build the query based on search parameters
    let query = supabase.from('travels').select().eq('destination', destination);
    let { data, swing } = await query;

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-medium my-4">Search Results</h1>
            <div className="p-4 flex flex-wrap justify-center space-x-4">
                {data.map((travel) => (
                    <TravelCard key={travel.travel_id} travel={travel} vertical={false} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
