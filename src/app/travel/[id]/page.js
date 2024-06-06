import React from 'react';
import { createClient } from 'utils/supabase/server';
import TravelCard from 'src/components/TravelCard';

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

    // Fetch travel data based on the dynamic id
    let travel;
    try {
        travel = await fetchTravelById(id);
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {/* Main content */}
            <div className="max-w-screen-xl mx-auto bg-white/90 mt-12 rounded-lg p-24 shadow-lg backdrop-blur-lg">
                {/* Title and intro */}
                <div className="flex">
                    <div className="flex-1">
                        <div className="text-4xl font-semibold uppercase mb-4">Hawaii</div>
                        <div className="text-sm font-light mb-6">
                            Bienvenido a nuestra guía de viaje para Hawaii. En solo 4 días, te mostraremos los lugares más icónicos y las experiencias culturales únicas de estas islas paradisíacas. Desde las majestuosas playas de Waikiki hasta las tradicionales danzas hula, prepárate para una aventura inolvidable. ¡Vamos!
                        </div>
                        <div className="mb-6">
                            <div className="text-xs font-light mb-1">24/05/2024 - 28/04/2024</div>
                            <div className="text-xs font-bold">
                                Approximate cost: <span className="font-light">400 - 600 $</span>
                            </div>
                            <div className="text-base font-normal">Solo queda 1 plaza</div>
                        </div>
                    </div>
                    <img className="w-96 h-64 object-cover rounded-lg ml-8" src="https://via.placeholder.com/454x314" alt="Hawaii Map" />
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
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                                    <img src="https://via.placeholder.com/40x40" alt="Angel Gallardo" />
                                </div>
                                <div>
                                    <div className="text-sm font-normal text-gray-900">Angel Gallardo <span className="text-rose-600">(Admin)</span></div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                                    <img src="https://via.placeholder.com/40x40" alt="Roberto Toro" />
                                </div>
                                <div>
                                    <div className="text-sm font-normal text-gray-900">Roberto Toro</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                                    <img src="https://via.placeholder.com/40x40" alt="Sofia Aguilar" />
                                </div>
                                <div>
                                    <div className="text-sm font-normal text-gray-900">Sofia Aguilar</div>
                                </div>
                            </div>
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