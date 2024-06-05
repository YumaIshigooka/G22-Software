/**
 * The `RootLayout` function in this code snippet sets up a layout for a Next.js application, including
 * authentication handling with Supabase and dynamic background configuration based on the URL.
 * @returns The `RootLayout` component is being returned. It is a functional component that sets up the
 * layout structure for the application. The component includes HTML structure with a `head` and `body`
 * section. Inside the `body`, it conditionally sets a background image based on the `needsBackground`
 * variable. It also includes a `Navbar` component, a `AuthProvider` component wrapping the `children
 */
// Next.js and React imports
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Import components and styles
import AuthProvider from 'src/components/AuthProvider';
import Navbar from 'src/components/Navbar';
import 'src/styles/globals.css';

// This might be either a functional component or part of a page depending on your setup
export default async function Layout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  // Fetch session data from Supabase
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <body>
        <Navbar user={session?.user} background="blue" />
        <AuthProvider accessToken={session?.access_token}>{children}</AuthProvider>
      </body>
    </html>
  );
}
