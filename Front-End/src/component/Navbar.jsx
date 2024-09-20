import React, { useState } from 'react';
import logo from "/ticket.png";
import { Link as ScrollLink } from 'react-scroll'; // Rename Link from react-scroll to ScrollLink
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  //navItems
  const navItems = [
    { path: "home", link: "Home" },
    { path: "features", link: "Features" },
    { path: "how", link: "How it Works" },
    { path: "aboutus", link: "About Us" },
    { path: "testimonial", link: "Testimonial" },
  ];

  return (
    <header className="bg-[#5516DA] text-white fixed top-0 left-0 right-0 z-50">
      <nav className="px-12 py-4 max-w-10xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className='flex items-center'>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="Logo" className="h-6 px-2 ml-3 sm:ml-9" />
              <span className="text-xl text-white">EVENTIO</span>
            </ScrollLink>
          </div>

          {/* navitems for larger screens */}
          <ul className='hidden md:flex gap-6 text-lg space-x-6 items-center ml-12 sm:ml-32'>
            {navItems.map(({ path, link }) => (
              <li className='text-white ml-20 relative' key={path}>
                <ScrollLink
                  activeClass="active"
                  to={path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Desktop buttons */}
          <div className='hidden lg:flex gap-4 items-center ml-28'>
            <Link to="/get-app">
              <button className='bg-[#7C4DFF] px-6 py-2 font-medium rounded-3xl hover:bg-[#35313e] transition-all duration-200 ease-in'>
                Get the app
              </button>
            </Link>
            <Link to="/signin">
              <button className='bg-[#7C4DFF] px-11 py-2 font-medium rounded-3xl hover:bg-[#35313e] transition-all duration-200 ease-in'>
                Sign In
              </button>
            </Link>
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
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#5516DA] transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <ul className="space-y-6 p-6 text-center">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={toggleMenu} // Close menu on click in mobile view
              >
                {link}
              </ScrollLink>
            </li>
          ))}
          <li>
            <Link to="/get-app">
              <button className="bg-[#7C4DFF] px-4 py-2 w-full text-white rounded-3xl hover:bg-[#35313e] transition-all duration-200 ease-in">
                Get the app
              </button>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <button className="bg-[#7C4DFF] px-4 py-2 w-full text-white rounded-3xl hover:bg-[#35313e] transition-all duration-200 ease-in">
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
