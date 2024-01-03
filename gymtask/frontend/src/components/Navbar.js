import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import {useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const {user} = useAuthContext()

    const { logout } = useLogout()
    const  handleClick = () =>{
        logout()
    }
  


  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-white text-2xl font-bold">FlexTrack</h1>
        </Link>
     
           <nav className="hidden md:flex space-x-4">
           {user && (

            <div>
            <span>{user.email}</span>
            <button onClick={handleClick}  className="text-white text-2xl font-bold">
                Logout
            </button>
        </div>
           )}
        


         {!user && (
            <div>
          <Link to="/login">
          <h1 className="text-white text-2xl font-bold">Login</h1>
        </Link>
        <Link to="/signup">
          <h1 className="text-white text-2xl font-bold">Signup</h1>
        </Link>
          </div>
         )}
         


        </nav>
      </div>
    </header>
  );
};

export default Navbar;
