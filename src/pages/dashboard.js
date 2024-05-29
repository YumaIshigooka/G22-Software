import React, { useEffect } from "react";
import supabase from "@/lib/supabase";

const Dashboard = () => {
    const session = supabase.auth.getSession();
    console.log(session);

    useEffect(() => {
        if (!session) {
            router.push("/auth");
        }
    }, [session]);

    return (
        <div>
            <p>Your are logged in as {session.user}</p>
        </div>
    );
};

export default Dashboard;
