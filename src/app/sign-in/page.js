import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

import SignIn from 'src/components/Auth/SignIn';

export default async function SignInPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (<div className="w-full h-full min-h-['100vh'] mx-auto p-4 py-[12vh]" style={{ backgroundImage: 'url("/azores.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <SignIn />
  </div>);
}
