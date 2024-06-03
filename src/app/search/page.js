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


    // if (params.has('destination')) {
    //     query = query.ilike('destination', `%${params.get('destination')}%`);
    // }
    // if (params.has('start_date')) {
    //     query = query.gte('start_date', params.get('start_date'));
    // }
    // if (params.has('end_date')) {
    //     query = query.lte('end_date', params.get('end_date'));
    // }

    // const { data, error } = await query;
    // if (error) {
    //     throw new Error(error.message);
    // }
    // return data;

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Search Results</h1>
            <div className="p-4 flex flex-wrap justify-center space-x-4">
                {data.map((travel) => (
                    <TravelCard key={travel.travel_id} travel={travel} vertical={false} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
