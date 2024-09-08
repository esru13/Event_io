import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import CenterLayout from "../../component/pageLayout/centerLayout";
import RightLayout from "../../component/pageLayout/rightLayout";
import { AiOutlineReload } from "react-icons/ai"; 
import { BsThreeDots } from "react-icons/bs";  


function Newevent() {

  return (
    <CenterLayout>
      <div className="relative flex flex-col gap-10 rounded-2xl font-poppins">
   
      <div className="flex flex-col gap-9 flex-1 ml-4">


          <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-full">
            <div className="bg-[#5516DA] p-4 rounded-t-lg text-white flex items-center justify-between">
              <span className="text-xl font-bold">Event Details</span>
              <div className="flex gap-2">
                <button className="text-white hover:text-gray-200">
                  <AiOutlineReload size={20} />
                </button>
                <button className="text-white hover:text-gray-200">
                  <BsThreeDots size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Title of Event*</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter event title"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Event Type*</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter event type"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Date*</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Time*</label>
                    <input
                      type="time"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Description*</label>
                    <textarea
                      rows="4"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter event description"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Picture of the Event*(For Cover)</label>
                    <input
                      type="file"
                      className="w-full p-2 border border-dashed border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Address/Location of the Event*</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter event location"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-full">
  <div className="bg-[#5516DA] p-4 rounded-t-lg text-white flex items-center justify-between">
    <span className="text-xl font-bold">Ticket Details</span>
    <div className="flex gap-2">
      <button className="text-white hover:text-gray-200">
        <AiOutlineReload size={20} />
      </button>
      <button className="text-white hover:text-gray-200">
        <BsThreeDots size={20} />
      </button>
    </div>
  </div>
  <div className="p-6 space-y-6">

    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-1">Ticket Type*</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Silver, Gold, or Both"
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-1">Ticket Description</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter ticket description"
        />
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-1">Start Date*</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-1">End Date*</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="block text-gray-700 font-semibold mb-1">Ticket Price*</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter price for each ticket type"
        />
      </div>
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-1">QR Info</label>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Enter QR code"
      />
    </div>
  </div>
</div>

</div>
<div className="relative flex-1">
  <div className="absolute bottom-4 right-10">
    <button
      style={{ backgroundColor: '#5516DA', color: 'white' }}
      className="py-4 px-8 rounded-xl shadow-md w-full max-w-[250px] hover:bg-[#4a14b7] focus:outline-none focus:ring-2 focus:ring-[#5516DA]"
    >
      Post Event
    </button>
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

export default Newevent;
