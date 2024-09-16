import React, { useState } from 'react';
import logo from "/ticket.png"; 
import { NavLink } from 'react-router-dom';

// react icons\
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setisMenuOpen(!isMenuOpen);
  }

  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/features", link: "Features" },
    { path: "/how", link: "How it Works" },
    { path: "/about", link: "About Us" },
    { path: "/testimonial", link: "Testimonial" },
    { path: "/blogs", link: "Blog" },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center "> 
          <div className='flex items-center'>
          <img src={logo} alt="Logo" className="h-6 px-2 ml-9" /> 
          <a href="/" className="text-xl text-white">EVENTIO</a> 
          </div>
          {/* navitems for lg device*/}
          <ul className='md:flex gap-6 text-lg hidden space-x-6 items-center ml-32'>
            {
                navItems.map(({path, link}) => <li className='text-white' key={path}>
                    <NavLink className={({ isActive, isPending}) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                  } to={path}>{link}</NavLink>
                </li>)
            }
          </ul>
          {/* menu icons */}
          <div className='ml-24 text-white lg:flex gap-4 items-center hidden'>
            <button className='bg-[#5516DA] px-6 py-2 font-medium rounded-3xl hover:bg-orange-500 transition-all duration-200 ease-in'>Get the app</button>
          </div>

          {/* mobile menu btn, display mobile screen */}
          <div className='md:hidden ml-72 z-50'>
            <button onClick={toggleMenu} className='cursor-pointer'>
              {
                isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* menu items only for mobile */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({path, link}) => <li className='text-black' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
      </div>
      
    </header>
  );
};

export default Navbar;

