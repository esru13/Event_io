import React, { useState } from 'react';
import logo from "/ticket.png";
import { NavLink } from 'react-router-dom';

// react icons
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/", link: "Features" },
    { path: "/", link: "How it Works" },
    { path: "/", link: "About Us" },
    { path: "/", link: "Testimonial" },
    { path: "/", link: "Blog" },
  ];

  return (
    <header className="bg-[#5516DA] text-white fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className='flex items-center'>
            <img src={logo} alt="Logo" className="h-6 px-2 ml-3 sm:ml-9" />
            <a href="/" className="text-xl text-white">EVENTIO</a>
          </div>

          {/* navitems for larger screens */}
          <ul className='hidden md:flex gap-6 text-lg space-x-6 items-center ml-12 sm:ml-32'>
            {
              navItems.map(({ path, link }) => (
                <li className='text-white' key={path}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    } to={path}>{link}</NavLink>
                </li>
              ))
            }
          </ul>

          {/* Desktop buttons */}
          <div className='hidden lg:flex gap-4 items-center ml-28'>
            <button className='bg-[#7C4DFF]  px-6 py-2 font-medium rounded-3xl hover:bg-[#35313e] transition-all duration-200 ease-in'>Get the app</button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden ml-auto z-50'>
          <button onClick={toggleMenu} className='cursor-pointer' aria-label="Toggle Menu">
            {isMenuOpen ? <FaXmark className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64  bg-[#5516DA] transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <ul className="space-y-6 p-6 text-center">
          {
            navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  className="text-white text-lg"
                  onClick={toggleMenu}
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))
          }
          <li>
            <button className="bg-[#7C4DFF]  px-4 py-2 w-full text-white rounded-3xl hover:bg-[#35313e] transition-all duration-200 ease-in">
              Get the app
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
