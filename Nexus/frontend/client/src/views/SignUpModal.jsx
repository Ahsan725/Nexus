import React from 'react';
import { Link } from "react-router-dom";

// Note: Add form validation, min length input etc..
// Make responisve
// Add a button to un hide the password
function SignUpModal() {
    return (
        <>
            <main className="flex flex-col h-screen relative bg-purple-50">
                <div className="absolute inset-44 container mx-auto border-2 bg-white w-1/4 h-2/3 rounded-lg shadow-xl">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-center text-2xl font-bold p-3 pb-1 mb-1">Register</h1>
                        <p className="mb-2">Welcome to <p className="text-blue-500 inline font-bold">Nexus.</p></p>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 font-semibold text-sm">
                                Full Name:
                            </label>
                            <input
                                placeholder="John Doe"
                                type="text"
                                name="name"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                        </div>
                    
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-800 font-semibold text-sm">
                                Email:
                            </label>
                            <input
                                placeholder="Example@gmail.com"
                                type="email"
                                name="username"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="passwd" className="block text-gray-800 font-semibold text-sm">
                                Password:
                            </label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="passwd"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="re-passwd" className="block text-gray-800 font-semibold text-sm">
                                Confirm Password:
                            </label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="re-passwd"
                                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                            />
                        </div>

                        <div className="mb-6">
                            <Link to="" className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-20 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" >
                                Sign Up
                            </Link>
                        </div>

                        <div>
                            <p>Already have an account? <Link to="/login"><strong>Login</strong></Link></p>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignUpModal;
