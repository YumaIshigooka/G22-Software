import React from 'react'; // Add this import statement
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

  // Fetch additional user profile data if needed
  const profileData = {
    name: 'Angel Gallardo',
    tagline: 'A la aventura! 🐔',
    about: `¡Hola! Soy Angel Gallardo, un apasionado viajero que ha hecho del mundo su hogar. Desde pequeño, siempre sentí una atracción por lo desconocido y un deseo insaciable de explorar nuevos horizontes. Esto me ha llevado a recorrer más de 40 países, sumergiéndome en diferentes culturas y aprendiendo cada día algo nuevo de la diversidad que nuestro planeta tiene para ofrecer.
    
    Si buscas recomendaciones de viaje, consejos sobre cómo viajar de forma económica o simplemente quieres compartir historias y experiencias, ¡no dudes en conectarte conmigo! Estoy aquí para inspirar y ser inspirado por otros trotamundos como tú. ¡Nos vemos en el camino!`,
  };

  return <ProfileClient user={user} profileData={profileData} />;
}
