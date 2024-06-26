//@ts-nocheck
import { createClient } from 'utils/supabase/server'; // Ensure this path is correct
import TravelCard from 'src/components/TravelCard';

export default async function Explore() {
    const supabase = createClient();
    const { data, error } = await supabase.from("travels").select();

    if (error) {
        return <pre>{error.message}</pre>;
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className='text-4xl font-semibold mr-auto ml-[17.6vw] mt-16 mb-10'>EXPLORE</h1>
            {/* Only the first three cards, centered and vertical */}
            <div className="p-4 flex justify-center space-x-4 mb-12">
                {data.slice(0, 3).map((travel) => (
                    <TravelCard
                        key={travel.travel_id}
                        travel={travel}
                        vertical={true}
                    />
                ))}
            </div>
            <div className='flex w-full flex-col justify-center items-center bg-slate-100'>
                <div className='flex text-left mt-10 mb-6 text-2xl font-medium w-[64vw]'>
                    <h3>New Available Trips!</h3>
                </div>

                {/* The rest of the cards, normal layout */}
                <div className="p-4 flex justify-center flex-col w-full align-middle items-center">
                    {data.slice(3).map((travel) => (
                        <TravelCard
                            key={travel.travel_id}
                            travel={travel}
                            vertical={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
