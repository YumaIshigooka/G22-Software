import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ProfileClient from 'src/components/ProfileClient';

export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  const { data: profileData, error } = await supabase
    .from('users')
    .select('*')
    .eq('auth_user_id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile data:', error);
  }

  return <ProfileClient user={user} profileData={profileData || {}} />;
}
