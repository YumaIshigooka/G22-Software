// @ts-nocheck
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import PublishTravelForm from 'src/components/PublishTravelForm';
import { cookies } from 'next/headers';

const PublishPage = async () => {
    let supabase = createServerComponentClient({ cookies });

    // Fetch session data from Supabase
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        // Handle unauthenticated state
        return (
            <div className="container mx-auto p-4">
                <p>You must be logged in to publish a travel.</p>
            </div>
        );
    }

    const { data, error: userError } = await supabase
        .from('users')
        .select('user_id')
        .eq('auth_user_id', session?.user.id.toString())
        .single();

    if (userError) {
        console.error('Error fetching user ID:', userError);
        return (
            <div className="container mx-auto p-4">
                <p>Error fetching user information.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <PublishTravelForm user_id={data.user_id} />
        </div>
    );
};

export default PublishPage;
