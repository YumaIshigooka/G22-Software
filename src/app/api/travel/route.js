import { NextResponse } from 'next/server';
import { createClient } from 'utils/supabase/server';

export async function POST(request) {
    const supabase = createClient();
    const body = await request.json();

    const { destination, start_date, end_date, max_people, description, cost, creator_id } = body;

    const { data, error } = await supabase
        .from('travels')
        .insert([
            {
                destination,
                start_date,
                end_date,
                max_people,
                description,
                cost,
                creator_id,
            },
        ])
        .select('travel_id')
        .single();

    if (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ id: data.travel_id }, { status: 201 });
}
