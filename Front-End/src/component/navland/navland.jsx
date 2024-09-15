import React from "react";

function Navland({ children }) {
  return (
    <>
      <nav className="bg-black text-white p-4 fixed w-full top-0 z-10">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-2 ml-4 md:ml-10 lg:ml-20 xl:ml-40">
            <img src="/ticket.png" alt="Ticket Logo" className="h-6 w-6" />
            <span className="text-xl font-bold">EVENTIO</span>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <button className="hover:text-[#5516DA] py-2 px-4 rounded focus:outline-none">
                Home
              </button>
            </li>
            <li>
              <button className="hover:text-[#5516DA] py-2 px-4 rounded focus:outline-none">
                Features
              </button>
            </li>
            <li>
              <button className="hover:text-[#5516DA] py-2 px-4 rounded focus:outline-none">
                How it works?
              </button>
            </li>
            <li>
              <button className="hover:text-[#5516DA] py-2 px-4 rounded focus:outline-none">
                About Us
              </button>
            </li>
            <li>
              <button className="hover:text-[#5516DA] py-2 px-4 rounded focus:outline-none">
                Testimonial
              </button>
            </li>
          </ul>
          <button className="bg-[#5516DA] text-white py-2 px-6 rounded-full mr-4 md:mr-10 lg:mr-20 xl:mr-40">
            Get the App
          </button>
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#5516DA]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left py-2 px-4 rounded hover:text-[#5516DA]">
                Home
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 rounded hover:text-[#5516DA]">
                Features
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 rounded hover:text-[#5516DA]">
                How it works?
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 rounded hover:text-[#5516DA]">
                About Us
              </button>
            </li>
            <li>
              <button className="w-full text-left py-2 px-4 rounded hover:text-[#5516DA]">
                Testimonial
              </button>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-20">
        {children}
      </div>
    </>
  );
}

export default Navland;
