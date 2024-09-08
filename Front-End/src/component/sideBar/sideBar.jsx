import React from "react";
import { Data } from "./sideBarData";
import "../../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { MdConfirmationNumber } from "react-icons/md"; 

function SideBar() {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  return (
    <div className="z-10 flex flex-col w-fit gap-5 fixed top-0 bottom-0 no-scrollbar overflow-y-scroll h-full font-poppins"
      style={{
        background: "linear-gradient(to bottom, #5516DA, #2D0C74)"
      }}
    >

      <div className="flex justify-center items-center py-5">
        <MdConfirmationNumber size={28} className="text-[#C1BBEB] mr-2" /> 
        <h1 className="text-[#C1BBEB] font-bold text-2xl">EVENTIO</h1>
      </div>

      <div className="flex flex-col pt-3 pb-5">
        {Data.map((items, index) => (
          <div
            className="flex cursor-pointer hover:bg-[#E1DCFF] rounded-md transition-colors duration-300 group"
            key={index}
            onClick={() => navigate(items.path)}
          >
            <div className="flex gap-6 w-fit pl-7 pr-14 py-2 justify-center items-center group-hover:text-[#5516DA]">
              <items.icon
                size={24}
                className="text-[#C1BBEB] group-hover:text-[#5516DA]"
              />
              <span className="text-sm text-[#C1BBEB] group-hover:text-[#5516DA]">
                {items.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
