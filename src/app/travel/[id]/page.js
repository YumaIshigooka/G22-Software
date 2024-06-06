// @ts-nocheck
import React from 'react';
import { createClient } from 'utils/supabase/server';
import TravelCard from 'src/components/TravelCard';
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createServerClient } from '@supabase/ssr';

import { cookies } from 'next/headers';
import ButtonJoin from 'src/components/ButtonJoin';

// This function fetches data for a specific travel based on its ID
export async function fetchTravelById(id) {
    const supabase = createClient();
    const { data, error } = await supabase.from('travels').select().eq('travel_id', id).single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

const TravelPage = async ({ params }) => {
    const { id } = params;
    let supabase = createClient();

    // Fetch travel data based on the dynamic id
    let travel;
    try {
        travel = await fetchTravelById(id);
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }

    let color;
    if (travel.available_users > 5) {
        color = 'MediumSeaGreen';
    } else if (travel.available_users > 2) {
        color = 'orange';
    } else {
        color = 'red';
    }

    const query = supabase.from('users').select().in('user_id', travel.joined_users);
    let { data: users, swing } = await query;

    
    supabase = createServerComponentClient({cookies});

    const {
        data: {session},
    } = await supabase.auth.getSession();

    console.log(session);

    let user_from_public;

    const queryUser = supabase.from('users').select().eq('auth_user_id', session.user.id);
    let { data: user } = await queryUser;

    let buttonAvailable = false;
    console.log('user_id:', user);
    user_from_public = user;
    if (travel.creator_id == user.user_id){
        buttonAvailable = false;
    } else if (user.length > 0) {
        buttonAvailable = true
    }

    return (
        <div style={{ backgroundImage: `url(${travel.travel_picture[0]})` }} className='pt-20'>
            {/* Main content */}
            <div className="max-w-screen-xl mx-auto bg-white/90 rounded-lg p-24 shadow-lg backdrop-blur-lg" >
            <pre>{JSON.stringify(travel, null,2)}</pre>
            <pre>{JSON.stringify(users, null, 2)}</pre>
                {/* Title and intro */}
                <div className="flex">
                    <div className="flex-1">
                        <div className="text-4xl font-semibold uppercase mb-4">{travel.destination}</div>
                        <div className="text-sm font-light mb-6">
                            {travel.description}
                        </div>
                        <div className="mb-6">
                            <div className="text-xs font-light mb-1">{travel.start_date} to {travel.end_date}</div>
                            <div className="text-xs font-bold">
                                Approximate cost: <span className="font-light">{travel.cost ? travel.cost + '€' : 'No budget has been defined'} </span>
                            </div>
                                <p className="mt-4"> <svg height="20" width="20" className='inline-block'>
                                    <circle cx="10" cy="10" r="4" fill={color} />
                                </svg>
                                Solo quedan {travel.available_users} plaza/s</p>
                            {buttonAvailable ? <ButtonJoin text="Join" bgColor="bg-blue-500" user={user} travel={travel}/> : null}
                        </div>
                    </div>
                    <img className="w-96 h-64 object-cover rounded-lg ml-8" src={travel.travel_picture[0]} alt="Hawaii Map" />
                </div>
                <img className="w-full h-96 object-cover rounded-lg my-6" src="https://via.placeholder.com/1118x386" alt="Hawaii" />

                {/* Description */}
                <div className="mb-12">
                    <div className="text-xl font-bold text-blue-700 mb-2">Description</div>
                    <div className="space-y-8">
                        <div className="flex items-start bg-gray-100 rounded-lg p-4">
                            <div className="flex-1">
                                <div className="text-xl font-bold mb-2">DAY 1</div>
                                <div className="text-xs font-light">
                                    A tu llegada al aeropuerto internacional de Honolulu, recogerás el coche de alquiler y harás el check-in en el hotel. Luego, explorarás la playa de Waikiki y la famosa estatua de Duke Kahanamoku. Por la noche, disfrutarás de una cena en un restaurante local con vistas al mar.
                                </div>
                            </div>
                            <img className="w-64 h-40 object-cover rounded-lg ml-4" src="https://via.placeholder.com/250x136" alt="Day 1" />
                        </div>
                        <div className="flex items-start bg-gray-100 rounded-lg p-4">
                            <div className="flex-1">
                                <div className="text-xl font-bold mb-2">DAY 2</div>
                                <div className="text-xs font-light">
                                    Comenzarás el día visitando Pearl Harbor National Memorial. Tómate tu tiempo para explorar los monumentos y aprender sobre la historia de la Segunda Guerra Mundial. Después, visitarás el North Shore y sus famosas playas de surf. Por la tarde, regresarás a Honolulu para cenar en un restaurante local.
                                </div>
                            </div>
                            <img className="w-64 h-40 object-cover rounded-lg ml-4" src="https://via.placeholder.com/250x136" alt="Day 2" />
                        </div>
                        <div className="flex items-start bg-gray-100 rounded-lg p-4">
                            <div className="flex-1">
                                <div className="text-xl font-bold mb-2">DAY 3</div>
                                <div className="text-xs font-light">
                                    Hoy, realizarás una excursión de un día al Mauna Kea. Se siente como si estuvieras en otro planeta al observar el cielo nocturno desde el observatorio de Mauna Kea. Por la tarde, disfrutarás de un picnic y de la naturaleza en su máxima expresión.
                                </div>
                            </div>
                            <img className="w-64 h-40 object-cover rounded-lg ml-4" src="https://via.placeholder.com/250x136" alt="Day 3" />
                        </div>
                        <div className="flex items-start bg-gray-100 rounded-lg p-4">
                            <div className="flex-1">
                                <div className="text-xl font-bold mb-2">DAY 4</div>
                                <div className="text-xs font-light">
                                    Por la mañana, tendrás tiempo libre para hacer compras de último minuto o simplemente relajarte en la playa. Por la tarde, tomarás el vuelo de regreso a casa. Refleja sobre las increíbles experiencias vividas y comienza a planear tu próxima visita a Hawaii.
                                </div>
                            </div>
                            <img className="w-64 h-40 object-cover rounded-lg ml-4" src="https://via.placeholder.com/250x136" alt="Day 4" />
                        </div>
                    </div>
                </div>

                {/* Meet the Creator and Members */}
                <div className="flex mb-12">
                    {/* Meet the Creator */}
                    <div className="flex-1 mr-8">
                        <div className="text-xl font-bold text-blue-700 mb-2">Meet the Creator</div>
                        <div className="flex">
                            <div className="w-48 h-48 bg-gray-400 rounded-2xl overflow-hidden">
                                <img src="https://via.placeholder.com/189x184" alt="Creator" />
                            </div>
                            <div className="ml-6">
                                <div className="text-sm font-light">
                                    Conoce al experto detrás de este viaje increíble. Con años de experiencia y una pasión insaciable por la aventura, nuestro creador anónimo ha diseñado itinerarios únicos que te llevarán a descubrir los secretos mejor guardados del mundo.
                                </div>
                                <button className="mt-4 bg-blue-700 text-white text-xs font-bold uppercase rounded-full px-6 py-2">Editar descripción</button>
                            </div>
                        </div>
                    </div>
                    {/* Vertical divider */}
                    <div className="w-px bg-gray-300 mx-4"></div>
                    {/* Members */}
                    <div className="flex-1">

                        <div className="text-xl font-bold text-blue-700 mb-2">Members</div>
                        <div className="space-y-4">
                            {users.map(user => {
                                return (
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                                            <img src={user.profile_picture} alt={user.name} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-normal text-gray-900">{user.name} <span className="text-rose-600">
                                                {user.user_id == travel.creator_id && '(Admin)'}</span></div>
                                        </div>
                                    </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>

                {/* Forum */}
                <div className="mb-12">
                    <div className="text-xl font-bold text-blue-700 mb-2">Forum</div>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                                <img src="https://via.placeholder.com/40x40" alt="User" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">Roberto Toro</div>
                                <div className="text-xs font-light">Cuanto antes salgamos mejor</div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                                <img src="https://via.placeholder.com/40x40" alt="User" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">Sofia Aguilar</div>
                                <div className="text-xs font-light">De acuerdo</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 bg-white rounded-lg border border-neutral-300 px-3 py-2 text-gray-500 text-base">Escribir un nuevo comentario...</div>
                </div>
            </div>
        
        </div>
    );
};

export default TravelPage;