import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SideMenu } from './NavBarSideMenu'; 

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const navLinkClasses = ({ isActive }) =>
    `hover:text-green-700 hover:underline underline-offset-4 transition-all duration-150 ${
      isActive ? 'text-green-600 underline' : 'text-black'
    }`;

  return (
   <div className='bg-green-50'>
     <header className=" max-w-7xl   h-16 sm:h-24 px-4 sm:px-6 lg:px-12 flex mx-auto items-center justify-between text-xl font-semibold">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="logo" className="h-12 sm:h-20" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-10">
        <NavLink to="/" className={navLinkClasses}>Home</NavLink>
         <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
        <NavLink to="/learn" className={navLinkClasses}>Learn</NavLink>
        
        <NavLink to="/statistics" className={navLinkClasses}>Statistics</NavLink>
        
        <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
               <NavLink to="/quiz" className={navLinkClasses}>Quiz</NavLink>
       
        
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
  
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-black focus:outline-none z-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={!isMenuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
          />
        </svg>
      </button>

      {/* Side Menu for Mobile */}
      {isMenuOpen && (
        <SideMenu
      
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </header>
   </div>
  );
};
