// @ts-nocheck

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from 'src/components/Navbar';
import SignOut from 'src/components/SignOut';

import Image from 'next/image';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className='flex justify-center w-full h-[500px]'>
        <div className='relative w-full overflow-hidden mx-4 mt-4 h-auto max-h-[500px] bg-cover bg-center rounded-xl' style={{ backgroundImage: "url('paris.jpg')" }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4'>
            <div className='flex flex-col items-center'>
              <h1 className='text-white text-5xl font-semibold mt-[30px]'>DESCUBRE EL MUNDO CON</h1>
              <img src='/cotravel_white_no_bg.svg' alt="cotravel-nobg" width={300} className='my-4' />
            </div>
            <p className='text-white text-l mb-4 mt-[2px] font-normal py-4'>Encuentra tu próximo destino y conéctate con otros viajeros. Tu aventura comienza aquí.</p>

            <Link href='/explore' className='bg-blue-600 text-white rounded-full py-4 px-20 mb-4'>Explore</Link>
            <form action="/search" method="GET" className='flex bg-white rounded-full justify-center items-center max-w-[80vw] w-1/2 px-2 py-2'>
              <img src='search.png' alt='search' className='size-5 ml-3'></img>
              <input type='text' name='query' placeholder='Hawaii' className='bg-white px-4 py-2 w-full rounded-full border-transparent focus:border-transparent focus:ring-0' />
              <button type='submit' className='bg-blue-600 text-white rounded-full p-4'>
                <img src='/right_arrow.svg' alt='search' />
              </button>
            </form>
          </div>
        </div>
      </div>


      <div className='flex w-full items-center flex-col'>
        <h1 className='mt-12 text-4xl font-semibold'>¿Por qué CoTravel?</h1>
        <p className='mt-4 text-slate-500 font-normal'>Porque con CoTravel puedes encontrar más que un simple viaje con gente desconocida</p>
      </div>
      <div className='flex w-full mt-12 justify-center pt-20 pb-0' style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <div style={{ flex: '60%' }}>
          <img src='landing1.jpg' className='object-cover w-4/6 h-[350px] rounded-xl' style={{ borderRadius: '0 20px 20px 0' }}></img>
          <div className='flex flex-col w-full justify-start items-start ml-20'>
            <div className='mt-16 flex justify-center items-center'>
              <div className='bg-blue-600 rounded-2xl mr-4'><img src='web_icon.png' className='filter invert size-8 m-1'></img></div>
              <h1 className='text-3xl font-medium'>Conexiones Globales</h1>
            </div>
            <div className='mt-4 flex items-center'>
              <p className='text-left text-lg mt-2 w-4/6 text-slate-500'>
                Con nuestra app, conecta con viajeros de todo el mundo que comparten tus intereses. Forma grupos y vive experiencias inolvidables juntos.
              </p>
            </div>
            <div className='mt-16 flex justify-center items-center'>
              <div className='bg-blue-600 rounded-2xl mr-4'><img src='teamwork_icon.png' className='filter invert size-8 m-1 p-1'></img></div>
              <h1 className='text-3xl font-medium'>Facilidad de Coordinación</h1>
            </div>
            <div className='mt-4 flex items-center'>
              <p className='text-left text-lg mt-2 w-4/6 text-slate-500'>
                Coordina todos los detalles de tu viaje fácilmente. Desde horarios de vuelos hasta reservas de alojamiento, nuestra app facilita la organización de todo el grupo.
              </p>
            </div>
            <div className='mt-16 flex justify-center items-center'>
              <div className='bg-blue-600 rounded-2xl mr-4'><img src='school_icon.png' className='filter invert size-8 m-1 p-1'></img></div>
              <h1 className='text-3xl font-medium'>Exepriencias Personalizadas</h1>
            </div>
            <div className='mt-4 flex items-center'>
              <p className='text-left text-lg mt-2 w-4/6 text-slate-500'>
                Únete a una comunidad global de viajeros apasionados. Comparte tus historias, recibe recomendaciones y encuentra compañeros de viaje con intereses similares.
              </p>
            </div>
          </div>
        </div>
        <div style={{ flex: '60px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <img src='vertical_bar.png' className='h-[900px] w-auto'></img>
        </div>
        <div style={{ flex: '500px', overflow: 'hidden' }}>
          <img src='earth.png' style={{ width: '200%', objectPosition: 'right', marginLeft: '+50%' }}></img>
        </div>
      </div>
      <div className='flex justify-center items-center w-full mt-5'>
        <img src='new_york.jpg' alt='not_found' className='object-cover w-full h-[300px] rounded-xl mx-4' style={{ objectPosition: 'center 50%' }}></img>
      </div>


      <div className='flex justify-center items-center w-full mt-12 align-center'>
        <div>
          <h2 className='text-2xl font-semibold mt-12 self-start'>Opiniones de clientes</h2>
          <p className='text-md font-normal self-start text-slate-500'>Más de 2,000 clientes satisfechos</p>
        </div>
      </div>
      
      <div className='flex justify-center items-center w-5/6 mt-12 align-center mx-auto'>
        <div className='flex w-1/3 outline outline-1 outline-slate-200 rounded-md flex-col font-medium py-10 px-5 mx-2'>
          <p>"Co-Travel ha revolucionado mis viajes. ¡Lo uso a diario y no podría estar más feliz!"</p>
          <div className='flex w-full mt-4'>
            <img alt='profile_pic'></img>
            <div className='flex w-full justify-center flex-col items-start ml-6'>
              <p className='font text-sm'>Angel Gallardo</p>
              <p className='text-sm font-light'>Catador de vinos</p>
            </div>
          </div>
        </div>
        <div className='flex w-1/3 outline outline-1 outline-slate-200 rounded-md flex-col font-medium py-10 px-5 mx-2'>
          <p>"Gracias a Co-Travel, nunca más viajo sola. He hecho amigos para toda la vida en cada aventura."</p>
          <div className='flex w-full mt-4'>
            <img alt='profile_pic'></img>
            <div className='flex w-full justify-center flex-col items-start ml-6'>
              <p className='font text-sm'>Angel Gallardo</p>
              <p className='text-sm font-light'>Catador de vinos</p>
            </div>
          </div>
        </div>
        <div className='flex w-1/3 outline outline-1 outline-slate-200 rounded-md flex-col font-medium py-10 px-5 mx-2'>
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
      <div className='flex w-full bg-neutral-950 text-white mt-12 flex-col pt-12'>
        <div className='flex w-full'>
          <img src='/cotravel_white_no_bg.svg' alt="cotravel-nobg" width={200} className='my-4 mx-20 opacity-80' />
          <div className='flex ml-auto flex-col mr-[4vw] mt-4 justify-start items-start'>
            <p className='text-sm mb-2 font-semibold'>Contact Us</p>
            <p className='text-sm mb-2 text-slate-300'>joan.pol@cotravel.es</p>
            <p className='text-sm text-slate-300'>+34 666 666 666</p>
          </div>
        </div>
        <div className='bg-gray-700 mt-8 mx-[4vw] rounded-full' style={{ height: '1px' }}></div>
        <div className='flex mt-4 w-full mb-10 px-10 pt-3'>
          <p className='mx-20 text-gray-500'>CoTravel © 2024.</p>
          <div className='flex ml-auto'>
            <button><img src='facebook.png' alt='not_found' className='size-5 filter invert opacity-25'></img></button>
            <button><img src='linkedin-logo.png' alt='not_found' className='size-5 filter invert ml-4 opacity-25'></img></button>
            <button><img src='youtube.png' alt='not_found' className='size-5 filter invert ml-4 opacity-25'></img></button>
            <button><img src='instagram.png' alt='not_found' className='size-5 filter invert ml-4 mr-20 opacity-25'></img></button>
          </div>
        </div>
      </div>
    </>
  );
}
