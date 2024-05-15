import {React, useState} from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ProfileModal from './ProfileModal';

function NavBar() {
    const [authenticated, setAuthenticated] = useState(true); //Set to false
    const [activateProfile, setActivateProfile] = useState(false); // Set to false initially

    function handleProfileClick() {
        setActivateProfile(!activateProfile); // Toggle the profile activation state
    }

    return (
        <>
            <div className="flex justify-between items-center px-4 py-4 bg-gray-900 rounded-lg border-2 border-gray-700 m-2 shadow-md">
                <div className="flex items-center">
                    <img className="w-16 h-12 rounded" src="../src/assets/Nexus_Logo.png" alt="Nexus Logo" />
                    <h1 className="text-4xl font-semibold text-white mx-10">NEXUS</h1>
                </div>

            {/*If the user is not authenticated they will be promted to login or signup */}
            {!authenticated && (
                <nav className="flex justify-end items-center text-lg">
                    <Link to="/login" className="cursor-pointer mx-2 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Login
                    </Link>

                    <Link to="/signup" className="cursor-pointer mx-2 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Signup
                    </Link>
                </nav>
            )}

            {authenticated && (
                <nav className="flex justify-end items-center text-lg">
                    <Link to="/" className="cursor-pointer mx-2 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Home
                    </Link>

                    <Link to="/spaces" className="cursor-pointer mx-2 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Spaces
                    </Link>

                    <Link to="/bookings" className="cursor-pointer mx-2 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Bookings
                    </Link>

                    {/*Add Auth Route Here*/}
                    <button onClick={handleProfileClick} className="text-white cursor-pointer mx-2 hover:bg-gray-400 p-2 rounded-lg ">
                        <FaUserCircle className="h-7 w-7" />
                    </button>
                </nav>
            )}

            {activateProfile && (
                <ProfileModal />
            )}
            </div>
        </>
    )
}

export default NavBar;
