import React from 'react';
import { FaLock, FaUserShield, FaClock, FaStar } from 'react-icons/fa';

const Belowbanner = () => {
  return (
    <div className="bg-[#F3F4FF] font-poppins text-gray-800">
      {/* App Promo Section */}

      {/* Download Section */}
      <section className="bg-white py-12 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-4">
          
          {/* Left side: Text content */}
          <div className="lg:w-1/2 lg:ml-20 flex flex-col items-start">
            <h2 className="text-left text-2xl lg:text-6xl leading-snug font-bold mb-5">
              Download Our <span className="text-[#5516DA]">Event Booking</span> App Today!
            </h2>
            <p className="font-bold lg:w-4/5 text-lg lg:text-xl">
              Never miss out on the best events! Get the Eventio app today on the App Store and Google Play to book, and enjoy events near you.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <div className="text-left border-l border-black pl-4 lg:pl-0">
                <h3 className="text-2xl font-bold text-[#5516DA]">50k +</h3>
                <p className="text-gray-600">Worldwide users</p>
              </div>
              <div className="text-left border-l border-black pl-4 lg:pl-0">
                <h3 className="text-2xl font-bold text-[#5516DA]">60 +</h3>
                <p className="text-gray-600">Countries</p>
              </div>
              <div className="text-left border-l border-black pl-4 lg:pl-0">
                <h3 className="text-2xl font-bold text-[#5516DA]">5k +</h3>
                <p className="text-gray-600">Organizers</p>
              </div>
            </div>

          </div>
          
          {/* Right side: Boxes centered */}
          <div className="lg:w-1/2 flex justify-center items-center mt-1 lg:mt-0">
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
    {/* iOS Download Card */}
    <div className="w-64 h-64 bg-[#E1DCFF] rounded-3xl shadow-lg border-2 border-gray-200 p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <div>
        <h3 className="text-xl font-semibold text-[#5516DA] mb-2">For iOS</h3>
        <p className="text-gray-600 mb-4">iOS 15.6+</p>
        <button className="bg-[#5516DA] text-white px-4 py-2 rounded-full mb-4 hover:bg-[#430fb7] transition-all duration-300">
          Download App
        </button>
      </div>
      <div className="flex items-center justify-between">
        <img 
          src="assets/qr.png" 
          alt="QR Code" 
          className="w-16 h-16 hover:scale-105 transition-transform duration-300" 
        />
        <img 
          src="assets/apple.png" 
          alt="Apple Icon" 
          className="w-16 h-16 hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </div>

    {/* Android Download Card */}
    <div className="w-64 h-64 bg-[#E1DCFF] rounded-3xl shadow-lg border-2 border-gray-200 p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <div>
        <h3 className="text-xl font-semibold text-[#5516DA] mb-2">For Android</h3>
        <p className="text-gray-600 mb-4">Android 7.0+</p>
        <button className="bg-[#5516DA] text-white px-4 py-2 rounded-full mb-4 hover:bg-[#430fb7] transition-all duration-300">
          Download App
        </button>
      </div>
      <div className="flex items-center justify-between">
        <img 
          src="assets/qr.png" 
          alt="QR Code" 
          className="w-16 h-16 hover:scale-105 transition-transform duration-300" 
        />
        <img 
          src="assets/android.png" 
          alt="Android Icon" 
          className="w-16 h-16 hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </div> 
  </div>
</div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F3F4FF] py-1 text-center min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
      <h2 className="text-xl text-black font-bold mb-4">
  - Benefits of Our <span className="text-[#5516DA]">Eventio</span>
</h2>

        <h3 className="text-2xl font-bold mb-8">
          Our <span className="text-[#5516DA]">Event Booking</span> app provides
        </h3>

        <div className="flex justify-evenly flex-wrap">
          <div className="bg-bg-transparent p-6 rounded-lg max-w-xs m-4 text-left">
            <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
              <FaLock className="text-[#5516DA] text-2xl" /> 
            </div>
            <h4 className="text-lg font-bold">Secure Payments</h4>
            <p className="font-bold mt-2 text-gray-600">
              At Eventio, your privacy is our priority. Book securely and enjoy your favorite events with peace of mind your information stays safe with us.
            </p>
          </div>

          <div className="bg-bg-transparent p-6 rounded-lg max-w-xs m-4 text-left">
            <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
              <FaUserShield className="text-[#5516DA] text-2xl" />
            </div>
            <h4 className="text-lg font-bold">Privacy Protection</h4>
            <p className="font-bold mt-2 text-gray-600">
              At Eventio, your privacy is paramount. We ensure that your personal data is protected, allowing you to enjoy events without worrying about your information's security.
            </p>
          </div>

          <div className="bg-bg-transparent p-6 rounded-lg max-w-xs m-4 text-left">
            <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
              <FaClock className="text-[#5516DA] text-2xl" />
            </div>
            <h4 className="text-lg font-bold">24/7 Service</h4>
            <p className="font-bold mt-2 text-gray-600">
              We're here for you around the clock. Enjoy seamless support and service for all your event needs, anytime, day or night.
            </p>
          </div>

          {/* New Benefit */}
          <div className="bg-bg-transparent p-6 rounded-lg max-w-xs m-4 text-left">
            <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
              <FaStar className="text-[#5516DA] text-2xl" />
            </div>
            <h4 className="text-lg font-bold">Top-Rated Events</h4>
            <p className="font-bold mt-2 text-gray-600">
              Discover and book top-rated events with confidence. Our app features highly rated events to ensure you have an exceptional experience every time.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* App Demo Section */}
      <section className="text-center py-12">
  <h2 className="text-2xl font-bold m-6">
    - <span className='text-[#5516DA]'>App</span> Demo
  </h2>
  <div 
    className="bg-purple-200 mx-auto rounded-2xl shadow-lg"
    style={{ maxWidth: '90%', height: '650px' }} // Responsive max width
  >
<div className="flex justify-center items-center w-full h-full">
  <video
    controls
    className="w-[300px] h-[600px] object-cover rounded-2xl"
    style={{ borderRadius: 'inherit' }} // Ensure rounded corners are inherited
  >
    <source src="assets/demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
  </div>
</section>

    </div>
  );
};

export default Belowbanner;
