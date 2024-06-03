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
            {/* Only the first three cards, centered and vertical */}
            <div className="p-4 flex justify-center space-x-4">
                {data.slice(0, 3).map((travel) => (
                    <TravelCard key={travel.travel_id} travel={travel} vertical={true} />
                ))}
            </div>
            {/* The rest of the cards, normal layout */}
            <div className="p-4 flex flex-wrap justify-center space-x-4">
                {data.slice(3).map((travel) => (
                    <TravelCard key={travel.travel_id} travel={travel} vertical={false} />
                ))}
            </div>
        </div>
    );
}
