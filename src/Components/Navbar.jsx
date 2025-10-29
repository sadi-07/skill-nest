import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-base-200'>
            <div className="navbar md:max-w-11/12 px-5 md:px-0 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn mr-2 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
                            <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/">Home</Link>
                            <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/about">About</Link>
                            <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/contact">Contact</Link>
                            <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/contact">My Profile</Link>
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
                    >
                        SKILL NEST
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <Link className='font-semibold text-gray-500 text-base' to="/">Home</Link>
                        <Link className='font-semibold text-gray-500 text-base' to="/about">About</Link>
                        <Link className='font-semibold text-gray-500 text-base' to="/contact">Contact</Link>
                        <Link className='font-semibold text-gray-500 text-base' to="/contact">My Profile</Link>
                    </ul>
                </div>
                <div className="navbar-end gap-5 flex-col md:flex-row">
                    <Link to="/login" className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-move shadow-md hover:shadow-lg hover:scale-105
 text-white py-5 font-semibold text-lg w-40 rounded-3xl">Log in</Link>
                    <Link to="/signup" className="btn bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-move shadow-md hover:shadow-lg hover:scale-105
 text-white py-5 font-semibold text-lg w-40 rounded-3xl">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;