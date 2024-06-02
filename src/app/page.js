import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from 'src/components/Navbar';
import SignOut from 'src/components/SignOut';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <>
      <div className='flex justify-center w-full'>
        <div className='relative w-full overflow-hidden mx-4 mt-4'>
          <img
            src='paris.jpg'
            alt='not-found'
            className='object-cover w-full h-[300px] rounded-xl'
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div>
          <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center'>
            <div className='flex flex-col'>
              <h1 className='text-white text-5xl font-bold mt-[30px]' style={{ fontFamily: 'Roboto, serif' }}>DESCUBRE EL MUNDO CON</h1>
              <h1 className='text-white text-5xl mb-4 mt-[2px] text-left'>©TRAVEL</h1>
            </div>
            <h3 className='text-white text-xl mb-4 mt-[2px] max-w-[600px] text-left font-thin'>Encuentra tu próximo destino y conéctate con otros viajeros. Tu aventura comienza aquí.</h3>
            <div className='flex bg-white rounded-3xl justify-center items-center'>
              <img src='search.png' alt='search' className='size-5 ml-3'></img>
              <input type='text' placeholder='Hawaii' className='bg-white px-4 py-2 max-w-[600px] w-[80vw] rounded-3xl border-transparent focus:border-transparent focus:ring-0' />
              <button className='bg-blue-600 text-white mr-2 rounded-full px-2 py-1'>➜</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='mt-12 text-4xl font-semibold'>¿Por qué CoTravel?</h1>
        <h3 className='mt-4 text-slate-500 w-[500px]'>Porque con CoTravel puedes encontrar más que un simple viaje con gente desconocida</h3>
      </div>
      <div className='flex w-full mt-12 justify-center' style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <div style={{ flex: '60%' }}>
          <img src='landing1.jpg' className='object-cover w-full h-[350px] rounded-xl' style={{ borderRadius: '0 20px 20px 0' }}></img>
          <div className='mt-16 flex justify-center items-center'>
            <div className='bg-blue-600 rounded-2xl mr-4'><img src='web_icon.png' className='filter invert size-8 m-1'></img></div>
            <h1 className='text-3xl font-medium'>Conexiones Globales</h1>
          </div>
          <div className='mt-4 flex justify-center items-center'>
            <p className='text-left text-lg mt-2 w-[25vw] text-slate-500'>
              Con nuestra app, conecta con viajeros de todo el mundo que comparten tus intereses. Forma grupos y vive experiencias inolvidables juntos.
            </p>
          </div>
          <div className='mt-16 flex justify-center items-center'>
            <div className='bg-blue-600 rounded-2xl mr-4'><img src='teamwork_icon.png' className='filter invert size-8 m-1 p-1'></img></div>
            <h1 className='text-3xl font-medium'>Facilidad de Coordinación</h1>
          </div>
          <div className='mt-4 flex justify-center items-center'>
            <p className='text-left text-lg mt-2 w-[25vw] text-slate-500'>
              Coordina todos los detalles de tu viaje fácilmente. Desde horarios de vuelos hasta reservas de alojamiento, nuestra app facilita la organización de todo el grupo.
            </p>
          </div>
          <div className='mt-16 flex justify-center items-center'>
            <div className='bg-blue-600 rounded-2xl mr-4'><img src='school_icon.png' className='filter invert size-8 m-1 p-1'></img></div>
            <h1 className='text-3xl font-medium'>Exepriencias Personalizadas</h1>
          </div>
          <div className='mt-4 flex justify-center items-center'>
            <p className='text-left text-lg mt-2 w-[25vw] text-slate-500'>
              Únete a una comunidad global de viajeros apasionados. Comparte tus historias, recibe recomendaciones y encuentra compañeros de viaje con intereses similares.
            </p>
          </div>
        </div>
        <div style={{ flex: '10%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <img src='vertical_bar.png' className='h-[900px] w-auto'></img>
        </div>
        <div style={{ flex: '30%', overflow: 'hidden' }}>
          <img src='earth.png' style={{ width: '200%', objectPosition: 'right', marginLeft: '+50%' }}></img>
        </div>
      </div>
      <div className='flex justify-center items-center w-full mt-12'>
        <img src='new_york.jpg' alt='not_found' className='object-cover w-full h-[300px] rounded-xl mx-4' style={{ objectPosition: 'center 50%' }}></img>
      </div>
      <h1 className='text-2xl font-bold mt-12 self-start ml-[20vw]'>Opiniones de clientes</h1>
      <p className='text-md font-normal self-start ml-[20vw] text-slate-500'>Más de 2,000 clientes satisfechos</p>
      <div className='flex justify-center items-center w-full mt-12'>
        <div className='flex w-[20vw] outline outline-1 outline-slate-200 rounded-md p-3 flex-col font-medium mx-4'>
          <p>"Co-Travel ha revolucionado mis viajes. ¡Lo uso a diario y no podría estar más feliz!"</p>
          <div className='flex w-full mt-4'>
            <img alt='profile_pic'></img>
            <div className='flex w-full justify-center flex-col items-start ml-6'>
              <p className='font text-sm'>Angel Gallardo</p>
              <p className='text-sm font-light'>Catador de vinos</p>
            </div>
          </div>
        </div>
        <div className='flex w-[20vw] outline outline-1 outline-slate-200 rounded-md p-3 flex-col font-medium mx-4'>
          <p>"Gracias a Co-Travel, nunca más viajo sola. He hecho amigos para toda la vida en cada aventura."</p>
          <div className='flex w-full mt-4'>
            <img alt='profile_pic'></img>
            <div className='flex w-full justify-center flex-col items-start ml-6'>
              <p className='font text-sm'>Angel Gallardo</p>
              <p className='text-sm font-light'>Catador de vinos</p>
            </div>
          </div>
        </div>
        <div className='flex w-[20vw] outline outline-1 outline-slate-200 rounded-md p-3 flex-col font-medium mx-4'>
          <p>"He encontrado a mis mejores amigos gracias a este increíble servicio. Viajar en grupo nunca fue tan fácil y divertido."</p>
          <div className='flex w-full mt-4'>
            <img alt='profile_pic'></img>
            <div className='flex w-full flex-col items-start ml-6'>
              <p className='font text-sm'>Angel Gallardo</p>
              <p className='text-sm font-light'>Catador de vinos</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full bg-black text-white mt-12 flex-col'>
        <div className='flex w-full'>
          <h1 className='text-4xl mt-4 ml-[4vw]'>©TRAVEL</h1>
          <div className='flex ml-auto flex-col mr-[4vw] mt-4 justify-start items-start'>
            <p className='text-sm mb-2 font-semibold'>Contact Us</p>
            <p className='text-sm mb-2 text-slate-300'>joan.pol@cotravel.es</p>
            <p className='text-sm text-slate-300'>+34 666 666 666</p>
          </div>
        </div>
        <div className='bg-slate-300 mt-8 mx-[4vw] rounded-full' style={{height: '1px'}}></div>
        <div className='flex mt-4 w-full mb-10'>
          <p className='ml-[4vw]'>CoTravel2024</p>
          <div className='flex ml-auto'>
            <button><img src='facebook.png' alt='not_found' className='size-5 filter invert opacity-70'></img></button>
            <button><img src='linkedin-logo.png' alt='not_found' className='size-5 filter invert ml-4 opacity-70'></img></button>
            <button><img src='youtube.png' alt='not_found' className='size-5 filter invert ml-4 opacity-70'></img></button>
            <button><img src='instagram.png' alt='not_found' className='size-5 filter invert ml-4 mr-[4vw] opacity-70'></img></button>
          </div>
        </div>
      </div>
    </>
  );
}
