import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import CenterLayout from "../../component/pageLayout/centerLayout";
import RightLayout from "../../component/pageLayout/rightLayout";
import { FaPhoneAlt, FaEllipsisV } from 'react-icons/fa';
function Manageevent() {
  return (
    <CenterLayout>
      <div className="relative flex flex-col gap-10 rounded-2xl font-poppins">
    <div className="flex flex-col gap-9 flex-1 ml-4">

      <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-full">
        <div className="bg-[#5516DA] p-4 rounded-t-lg text-white">
          <span className="text-lg font-bold">Event List</span>
        </div>
        <div className="p-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2 border-b">Event Title</th>
                <th className="px-4 py-2 border-b">Event Type</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Ticket Types</th>
                <th className="px-4 py-2 border-b">Location</th>
                <th className="px-4 py-2 border-b">Contact</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border-b">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 border-b">Web Summit</td>
                <td className="px-4 py-2 border-b">Tech Event</td>
                <td className="px-4 py-2 border-b">Mar 25, 24</td>
                <td className="px-10 py-2 border-b">Both</td>
                <td className="px-4 py-2 border-b">Mill Hall</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 px-9">
                    <FaPhoneAlt size={16} />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button className="text-gray-500 px-9">
                    <FaEllipsisV size={16} />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button className="bg-[#5516DA] text-white py-2 px-4 rounded-lg shadow hover:bg-[#3a1d85] transition duration-200">
              + New Event
            </button>
          </div>
        </div>
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


export default Manageevent;
