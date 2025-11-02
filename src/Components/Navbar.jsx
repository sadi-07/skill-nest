import React, { use, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, removeUser } = use(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        removeUser();
    }

    return (
        <div className='bg-base-200 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 px-2 md:px-0'>

            <div className="navbar md:max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn mr-2 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
                            <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/">Home</Link>

                            <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/skills">Skills</Link>
                            {
                                user ? <Link className='font-semibold text-gray-500 text-base py-1 hover:bg-base-200' to="/myprofile">My Profile</Link> : ""
                            }
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500"
                    >
                        SKILL NEST
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink className='font-semibold text-gray-500 text-lg' to="/">Home</NavLink>


                        <NavLink className='font-semibold text-gray-500 text-lg' to="/skills">Skills</NavLink>
                        {
                            user ? <NavLink className='font-semibold text-gray-500 text-lg' to="/myprofile">My Profile</NavLink> : ""
                        }
                        <NavLink className='font-semibold text-gray-500 text-base' to="/myprofile">{user && user.email}</NavLink>


                    </ul>
                </div>
                <div className="navbar-end gap-5 md:flex-row">

                    {
                        user ? (
                            <div className="relative group">
                                <img
                                    className="h-12 w-12 rounded-full cursor-pointer border-2 border-transparent hover:border-purple-400 transition-all duration-300"
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                />

                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {user.displayName || "User Name"}
                                </div>
                            </div>
                        ) : <Link to="/signup" className="btn bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-move shadow-md hover:shadow-lg hover:scale-105
 text-white py-5 font-semibold text-lg w-30 md:w-40 rounded-3xl">Sign Up</Link>
                    }


                    {
                        user ? <Link onClick={handleLogOut} className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-move shadow-md hover:shadow-lg hover:scale-105
 text-white py-5 font-semibold text-lg w-30 md:w-40 rounded-3xl">Log Out</Link> : <Link to="/login" className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-move shadow-md hover:shadow-lg hover:scale-105
 text-white py-5 font-semibold text-lg w-30 md:w-40 rounded-3xl">Log in</Link>
                    }



                </div>
            </div>

        </div>
    );
};

export default Navbar;