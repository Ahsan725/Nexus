import React from 'react';

function LandingPage() {
    return (
        <main className="flex flex-col h-screen">
            <div className="flex-grow">
                <div className="flex h-full items-center justify-center bg-gray-100 text-black">
                    <div className="w-1/2 p-12">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-6">Nexus</h1>
                        <p className="text-2xl mb-4 font-bold text-gray-800">Your premier destination for co-working space bookings.</p>
                        <p className="mb-8 text-xl md:text-xl font-medium text-gray-600">In today's dynamic work environment, freelancers, remote workers, and startups are increasingly in need of flexible, affordable, and well-equipped workspaces. Nexus connects space providers with those seeking flexible workspace options, serving as a centralized hub for discovering, comparing, and booking co-working spaces.</p>
                        <button class="text-semibold cursor-pointer mx-2 transition-all bg-blue-500 text-white px-6 py-4 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-lg">
                        Discover Spaces
                        </button>
                    </div>

                    <div className="w-1/2 h-1/4 flex justify-center items-center mx-8">
                        <img src='./src/assets/LandingPageImage.jpg' alt="Co-Working Spaces" className="max-w-full h-auto rounded" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;



