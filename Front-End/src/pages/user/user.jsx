import React, { useState } from "react";
import CenterLayout from "../../component/pageLayout/centerLayout";
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBirthdayCake, FaBriefcase } from 'react-icons/fa'; 

function User() {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: 'Lala Ba.',
    address: 'AA',
    phone: '123123312',
    email: 'email@example.com',
    dateOfBirth: 'January 1, 1990',
    occupation: 'Eventio Admin'
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log("Logged out");
  };

  return (
    <CenterLayout>
      <div className="w-full mx-auto py-10 ml-60 mt-22 bg-white rounded-lg shadow-lg flex items-start">
        <div className="flex items-center ml-8">

          <div className="w-36 h-36 bg-[#5516DA] rounded-full flex items-center justify-center overflow-hidden">
            <FaUser size={80} color="white" />
          </div>

          <div className="w-1 h-96 bg-gray-300 ml-4"></div> 
        </div>

        <div className="text-black text-sm flex flex-col space-y-4 px-6 w-full mt-8">
          <form>
            <div className="flex items-center space-x-2 mb-4">
              <FaUser size={20} />
              <input
                type="text"
                name="fullName"
                value={userInfo.fullName}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaMapMarkerAlt size={20} />
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaPhoneAlt size={20} />
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaEnvelope size={20} />
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaBirthdayCake size={20} />
              <input
                type="text"
                name="dateOfBirth"
                value={userInfo.dateOfBirth}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <FaBriefcase size={20} />
              <input
                type="text"
                name="occupation"
                value={userInfo.occupation}
                onChange={handleChange}
                disabled={!editing}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex justify-end mt-4">
              {editing ? (
                <>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="bg-[#5516DA] text-white p-2 rounded hover:bg-[#4a14a4] mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="bg-[#E1DCFF] text-[#5516DA] p-2 rounded hover:bg-[#d0c8ff]"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setEditing(true)}
                    className="bg-[#5516DA] text-white p-2 rounded hover:bg-[#4a14a4] mr-2"
                  >
                    Edit Profile
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="bg-[#E1DCFF] text-[#5516DA] p-2 rounded hover:bg-[#d0c8ff]"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </CenterLayout>
  );
}

export default User;
