import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="flex p-2 px-4 text-xl bg-purple-400 text-white font-bold justify-between">
                Home Page
            </div>

            <div className="flex justify-center p-4">
                <div>
                    <div className="w-full" style={{ textAlign: "center" }}>
                        This project is a web application built using Next.js, a
                        popular React framework that enables features like
                        server-side rendering and static site generation. The
                        styling of the application is done using Tailwind CSS, a
                        utility-first CSS framework for rapidly building custom
                        designs. The application features user authentication
                        powered by Supabase, a scalable and open-source Firebase
                        alternative. Additionally, it fetches and displays a
                        list of popular movies using data from The Movie
                        Database (TMDB) API.
                    </div>
                    <div className="text-sm">
                        <h1 className="text-xl font-bold mt-2">
                            Technologies Used
                        </h1>
                        <span className="font-bold">Next.js:</span> Used for the
                        overall frontend framework, providing features like fast
                        navigation and server-side rendering. <br />
                        <span className="font-bold">Tailwind CSS:</span>
                        Utilized for the application&apos;s styling, offering
                        utility classes that make it easy to build responsive
                        and maintainable UIs. <br />
                        <span className="font-bold">Supabase:</span> Used for
                        the backend, specifically for handling user
                        authentication. <br />
                        <span className="font-bold">TMDB API:</span> Provides
                        the data for popular movies, which is fetched and
                        displayed in the application. <br />
                        <span className="font-bold">React Query:</span> Used for
                        data fetching, caching, and state management for the
                        TMDB API calls.
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-2xl">
                <Link href="/auth" className="hover:text-purple-400">
                    Go to Auth
                </Link>
            </div>
        </div>
    );
}
