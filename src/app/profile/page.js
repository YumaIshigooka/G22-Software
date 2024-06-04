import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import SignOut from 'src/components/SignOut';
import ItinerayCard from 'src/components/ItineraryCard';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className='flex w-full flex-col'>
      <img src='forest.jpg' alt='not-found' className='object-cover w-full h-[150px]' style={{ objectPosition: 'center 50%' }}></img>
      <div className='flex w-full mt-[4vh] px-[6vw] mb-[4vh]'>
        <div className='flex'>
          <img src='' alt='user_profile'></img>
          <div className='flex flex-col items-start ml-[2vw]'>
            <div className='flex align-middle items-center'>
              <p className='text-2xl text-blue-600 font-semibold'>Angel Gallardo</p>
              <img src='verified.png' alt='not-found' className='size-6 ml-2'></img>
            </div>
            <p className='text-sm text-slate-600'>A la aventura! 🐔</p>
            <p className='text-[10px]'>⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className='flex items-center ml-auto'>
          <button className='mr-2 border-2 border-blue-600 px-3 py-1 rounded-md text-sm'>Mis Viajes</button>
          <div className='flex flex-row'>
            <button className='flex items-center border-2 border-blue-500 text-white bg-blue-600 px-3 py-1 rounded-md text-sm'>
              <img src='edit-text.png' alt='edit' className='w-4 h-4 mr-2 filter invert'></img>
              Editar perfil
            </button>
          </div>
        </div>
      </div>
      <div className='flex w-full bg-slate-100 flex-col'>
    <div className='flex w-full bg-slate-200' style={{ height: "1px" }}></div>
      <div className='flex w-full mt-[3vh]'>
        <div className='flex flex-col items-start justify-start pl-[4vw]' style={{ flex: '60%' }}>
          <p className='text-md text-blue-600 font-bold'>About Me</p>
          <p className='text-sm text-slate-600 text-left mt-[2vh]'>
            ¡Hola! Soy Angel Gallardo, un apasionado viajero que ha hecho del mundo su hogar. Desde pequeño,
            siempre sentí una atracción por lo desconocido y un deseo insaciable de explorar nuevos horizontes.
            Esto me ha llevado a recorrer más de 40 países, sumergiéndome en diferentes culturas y aprendiendo
            cada día algo nuevo de la diversidad que nuestro planeta tiene para ofrecer.
          </p>
          <p className='text-sm text-slate-600 text-left mt-[2vh]'>
            Si buscas recomendaciones de viaje, consejos sobre cómo viajar de forma económica o simplemente quieres compartir historias y
            experiencias, ¡no dudes en conectarte conmigo! Estoy aquí para inspirar y ser inspirado por otros
            trotamundos como tú. ¡Nos vemos en el camino!
          </p>
          <p className='text-md text-blue-600 font-bold mt-[3vh]'>Posted Photos</p>
          <p className='text-sm text-slate-600 text-left mt-[2vh]'>
            No photos have been posted yet :(
          </p>
          <p className='text-md text-blue-600 font-bold mt-[3vh]'>Created Itineraries</p>
          <div className='mb-[3vh] mt-[3vh]'>
            <ItinerayCard 
                  image="hawaii.jpg"
                  title="Hawaii"
                  depart_date="2024-07-01"
                  return_date="2024-07-15"
                  places="5"
                  history={false}
              />
          </div>
        </div>
      <div style={{ flex: '40%' }}>
      <p className='text-md text-blue-600 font-bold text-left ml-[4vw]'>Travel History</p>
      <div className='flex ml-[4vw] flex-col'>
        <div className='mt-[3vh] flex'>
            <ItinerayCard 
                  image="vietnam.jpg"
                  title="Vietnam"
                  depart_date="2024-07-01"
                  return_date="2024-07-15"
                  places="5"
                  history={true}
                  valoration={4}
              />
          </div>
          <div className='mt-[3vh] flex'>
            <ItinerayCard 
                  image="congo.jpg"
                  title="Congo Exploration"
                  depart_date="2024-07-01"
                  return_date="2024-07-15"
                  places="5"
                  history={true}
                  valoration={3}
              />
          </div>
      </div>
      </div>
    </div>
  </div>
    </div>
  );
  
}

{/* <div className="card">
      
<h2>User Profile</h2>
<code className="highlight">{user.email}</code>
<div className="heading">Last Signed In:</div>
<code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
<Link className="button" href="/">
  Go Home
</Link>
<SignOut />
</div> */}