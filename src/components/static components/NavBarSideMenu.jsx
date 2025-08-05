import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideMenu = ({  isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="absolute top-16 sm:top-20 left-0 w-screen bg-green-700 text-white flex flex-col items-center space-y-4 py-4 z-50 sm:hidden">
      <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
      <NavLink to={"/about"} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
         <NavLink to={"/female"} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
      <NavLink to={"/collections"} onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
      <NavLink to={"/male"} onClick={() => setIsMenuOpen(false)}>Donate</NavLink>

    </div>
  );
};
