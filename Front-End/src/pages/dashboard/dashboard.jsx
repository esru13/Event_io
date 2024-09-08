import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import CenterLayout from "../../component/pageLayout/centerLayout";
import RightLayout from "../../component/pageLayout/rightLayout";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const dayInfos = [
  "", "", "", "", "Concert at Mill...", "", "", "", "", "", "", 
  "Bazar", "", "The Place", "", "NBA Match", "", 
  "", "", "", "", "", "", "Concert", "", "", "", "", "", "", ""
];


function Dashboard() {
  const handleBoxClick = (day, index) => {
    alert(`Box ${index + 1} clicked on ${day}`);
  };

  return (
    <CenterLayout>
      <div className="flex gap-10 rounded-2xl font-poppins">

        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-1 max-w-[calc(200%-300px)] ml-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold">Calendar</span>
            <div className="flex gap-4">
              <select className="p-2 border border-gray-300 rounded-md">

                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(month => (
                  <option key={month}>{month}</option>
                ))}
              </select>
              <select className="p-2 border border-gray-300 rounded-md">

                {[2021, 2022, 2023, 2024].map(year => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 text-center mb-4">
            {daysOfWeek.map((day) => (
              <span key={day} className="font-semibold">
                {day}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4 text-center">
            {[...Array(42)].map((_, index) => {
              const dayNumber = index + 1;
              const info = dayInfos[dayNumber - 1];

              return (
<button
  key={dayNumber}
  onClick={() => handleBoxClick(dayNumber)}
  className={`p-4 border rounded-md h-24 flex flex-col items-center justify-center text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    info ? "bg-blue-50" : ""
  } ${
    dayNumber === 10
      ? "bg-[#5516DA] text-white border-white"      
      : dayNumber === 26
      ? "bg-orange-500 text-white border-white"     
      : dayNumber === 22
      ? "border-red-500 bg-gray-100 text-gray-800"  
      : "bg-gray-100 border-gray-300"               
  }`}
>
  {dayNumber <= 31 ? (
    <>
      <span className="font-bold">{dayNumber}</span>
      {info && (
        <div className="flex flex-col items-center mt-2">
          <span className="text-xs text-blue-600">{info}</span>
          <div className="flex gap-1 mt-1">
            <BsFillCircleFill className="text-red-500" size={10} />
            <BsFillCircleFill className="text-green-500" size={10} />
            <BsFillCircleFill className="text-blue-500" size={10} />
          </div>
        </div>
      )}
      {dayNumber === 2 && (
        <div className="flex items-center mt-2">

          <div className="w-1 h-full bg-orange-500 mr-2"></div> 

          <span className="text-xs text-gray-800">Web Summit</span> 
        </div>
      )}
    </>
  ) : null}
</button>





              );
            })}
          </div>
        </div>
        <RightLayout>
  <div className="min-w-full flex flex-col gap-4 font-poppins bg-[#E1DCFF] p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-[800px] mx-auto">

    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-[800px] mx-auto transition-transform transform hover:scale-105">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">Event Details</span>
        <span className="text-sm text-gray-500">Thursday, 10th April, 2021</span>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md border border-l-8 border-blue-500 flex flex-col gap-2 w-full max-w-[800px] mx-auto transition-transform transform hover:scale-105 hover:border-[#E1DCFF]">
      <span className="text-lg font-semibold">Web Summit</span>
      <span className="text-sm text-gray-500">Tech Event</span>
      <div className="flex items-center gap-2 text-gray-600">
        <AiOutlineCalendar size={20} className="text-[#FB7D5B]" />
        <span>March 20, 2024</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock size={20} className="text-[#FCC43E]" />
          <span>12:20 PM</span>
        </div>
        <BsFillCircleFill size={20} className="text-gray-600" />
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md border border-l-8 border-green-500 flex flex-col gap-2 w-full max-w-[800px] mx-auto transition-transform transform hover:scale-105 hover:border-[#E1DCFF]">
      <span className="text-lg font-semibold">Web Summit</span>
      <span className="text-sm text-gray-500">Tech Event</span>
      <div className="flex items-center gap-2 text-gray-600">
        <AiOutlineCalendar size={20} className="text-[#FB7D5B]" />
        <span>March 20, 2024</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock size={20} className="text-[#FCC43E]" />
          <span>12:20 PM</span>
        </div>
        <BsFillCircleFill size={20} className="text-gray-600" />
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md border border-l-8 border-red-500 flex flex-col gap-2 w-full max-w-[800px] mx-auto transition-transform transform hover:scale-105 hover:border-[#E1DCFF]">
      <span className="text-lg font-semibold">Web Summit</span>
      <span className="text-sm text-gray-500">Tech Event</span>
      <div className="flex items-center gap-2 text-gray-600">
        <AiOutlineCalendar size={20} className="text-[#FB7D5B]" />
        <span>March 20, 2024</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock size={20} className="text-[#FCC43E]" />
          <span>12:20 PM</span>
        </div>
        <BsFillCircleFill size={20} className="text-gray-600" />
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md border border-l-8 border-purple-500 flex flex-col gap-2 w-full max-w-[800px] mx-auto transition-transform transform hover:scale-105 hover:border-[#E1DCFF]">
      <span className="text-lg font-semibold">Web Summit</span>
      <span className="text-sm text-gray-500">Tech Event</span>
      <div className="flex items-center gap-2 text-gray-600">
        <AiOutlineCalendar size={20} className="text-[#FB7D5B]" />
        <span>March 20, 2024</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          <FaClock size={20} className="text-[#FCC43E]" />
          <span>12:20 PM</span>
        </div>
        <BsFillCircleFill size={20} className="text-gray-600" />
      </div>
    </div>
    <button
      style={{ backgroundColor: '#E1DCFF', color: '#5516DA' }}
      className="py-2 px-4 rounded-lg shadow-md mt-4 w-full hover:bg-[#D5B7FF] focus:outline-none focus:ring-2 focus:ring-[#5516DA]"
    >
      See all events
    </button>
  </div>
</RightLayout>

      </div>
    </CenterLayout>
  );
}

export default Dashboard;
