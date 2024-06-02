import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react';

import AuthProvider from 'src/components/AuthProvider';
import Navbar from 'src/components/Navbar';

import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="es">
      <body>
        <Navbar user={session?.user} background="blue" />
        <div className="flex min-h-screen flex-col items-center justify-center">
          <main className="flex w-full flex-1 shrink-0 flex-col items-center text-center">
            <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
