import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

//Note dont hard code this fetch data from the database on the user
function ProfileModal() {
    return (
        <>
            <main className="absolute top-24 right-3 container mx-auto border-2 bg-white w-60 h-1/3 xl:h-60 rounded-lg shadow-xl z-10">
                <div className="flex flex-col justify-center items-center p-2 my-4">
                    <FaUserCircle className="h-1/4 w-1/4" />
                    <h1 className="font-bold text-2xl pb-2">John Doe</h1>
                    <h3 className="pb-4">Example@gmail.com</h3>

                    {/*When the user clicks signout sign the user out and return them to the homepage*/}
                    <Link to="/" className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                        Sign Out
                    </Link>
                </div>
            </main>
        </>
    )
}

export default ProfileModal
