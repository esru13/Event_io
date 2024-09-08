import React from "react";
import { IoIosSearch } from "react-icons/io";
import { VscListFilter } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";
import { FaCog, FaUser } from "react-icons/fa"; 


function NavigationBar() {
  return (
    <div className="p-0 m-0 fixed top-0 right-0 left-0 z-10">
      <div className="flex items-center py-3 justify-between px-12 bg-custom">
        <div className="flex font-bold text-2xl pl-8"></div>
        <div className="flex rounded-3xl justify-between items-center gap-12 h-16 pl-7 pr-14" style={{ backgroundColor: '#E1DCFF' }}>
          <div className="relative flex items-center rounded-3xl h-12 w-[350px] bg-custom ml-8">
            <IoIosSearch size={24} color="#5516DA" className="absolute left-4" />
            <input
              type="text"
              placeholder="Search here..."
              className="text-[#A098AE] outline-none border-none placeholder:text-[#A098AE] pl-12 pr-4 rounded-3xl h-full w-full bg-custom"
            />
            <VscListFilter size={24} color="#5516DA" className="absolute right-4" />
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-custom">
              <FaCog size={24} color="#5516DA" /> 
            </div>
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-custom">
              <VscBellDot size={24} color="#5516DA" />
            </div>
            <div className="flex flex-col justify-center items-end mr-2">
              <span className="text-base font-semibold">Lala Ba.</span>
              <span className="text-sm text-[#A098AE]">Admin</span>
            </div>
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-custom">
              <FaUser size={24} color="#5516DA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;