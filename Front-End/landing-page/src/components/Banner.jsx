import React from 'react';
import logo from '../assets/image.png';

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
const Banner = () => {
  return (
    <div className="bg-#F3F4FF font-sans text-gray-800">
      {/* App Promo Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          <div>
            <h2 className="mb-4 font-bold lg:w-3/5 leading-snug text-left">- The Best Event Booking App</h2>
            <h1 className="text-left text-3xl lg:text-7xl leading-snug font-bold mb-5">
            The Ultimate <span className=' text-[#5516DA]'>Event Booking</span> Experience
            </h1>
            <p className="font-bold lg:w-3/5">
            Discover and book unforgettable events with <span className='text-[#5516DA]'>Eventio</span>. From concerts to conferences, find and secure your tickets effortlessly.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg">Get it on Google Play</button>
              <button className="bg-black text-white px-6 py-3 rounded-lg">Download on the App Store</button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                <div className="w-5 h-5 bg-red-400 rounded-full"></div>
                <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
              </div>
              <span className="text-lg font-semibold">50k+ Worldwide users</span>
            </div>
          </div>

          <div className='text-left flex justify-center items-center' >
            <img
             src={logo} alt="Logo" className='px-5 mt-8 lg:mt-0' />
            
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-white py-12">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-4 min-h-[600px]">
    
    {/* Left side: Text content */}
    <div className="lg:w-1/2 text-left">
      <h2 className="text-left text-2xl lg:text-6xl leading-snug font-bold mb-5">
        Download Our <span className="text-[#5516DA]">Event Booking</span> App Today!
      </h2>
      <p className="font-bold lg:w-4/5 text-lg lg:text-xl">
        Never miss out on the best events! Get the Eventio app today on the App Store and Google Play to book, and enjoy events near you.
      </p>

      <div className="flex gap-8 mt-8">
        <div className="text-center border-l border-black pl-4">
          <h3 className="text-2xl font-bold text-[#5516DA]">50k +</h3>
          <p className="text-gray-600">Worldwide users</p>
        </div>
        <div className="text-center border-l border-black pl-4">
          <h3 className="text-2xl font-bold text-[#5516DA]">60 +</h3>
          <p className="text-gray-600">Countries</p>
        </div>
        <div className="text-center border-l border-black pl-4">
          <h3 className="text-2xl font-bold text-[#5516DA]">5k +</h3>
          <p className="text-gray-600">Organizers</p>
        </div>
      </div>
    </div>
    
    {/* Right side: Boxes centered */}
    <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
      <div className="flex gap-2 lg:gap-4">
        <div className="w-64 h-64 bg-[#E1DCFF] rounded-3xl shadow-lg border-2 border-gray"></div> {/* Box 1 with increased size and border radius */}
        <div className="w-64 h-64 bg-[#E1DCFF] rounded-3xl shadow-lg border-2 border-gray"></div> {/* Box 2 with increased size and border radius */}
      </div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="bg-[#F3F4FF] py-12 text-center">
  <h2 className="text-xl text-gray-600 mb-4">
    - Benefits of Our <span className="text-purple-600">Eventio</span>
  </h2>
  <h3 className="text-2xl font-bold mb-8">
    Our <span className="text-purple-600">Event Booking</span> app provides
  </h3>

  <div className="flex justify-evenly">
    <div className="bg-bg-trsansparnet p-6 rounded-lg max-w-xs m-4 text-left ml-8 ">
      <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
        {/* Font Awesome Lock Icon */}
        <i className="fas fa-lock text-purple-600 text-2xl"></i> 
      </div>
      <h4 className="text-lg font-bold">Secure Payments</h4>
      <p className="font-bold mt-2 text-gray-600">
        At Eventio, your privacy is our priority. Book securely and enjoy your favorite events with peace of mind your information stays safe with us.
      </p>
    </div>

    <div className="bg-trsansparnet p-6 rounded-lg max-w-xs m-4 text-left ">
      <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
        <i className="fas fa-lock text-purple-600 text-2xl"></i>
      </div>
      <h4 className="text-lg font-bold">Secure Payments</h4>
      <p className="font-bold mt-2 text-gray-600">
        At Eventio, your privacy is our priority. Book securely and enjoy your favorite events with peace of mind your information stays safe with us.
      </p>
    </div>

    <div className="bg-trsansparnet p-6 rounded-lg max-w-xs m-4 text-left mr-8 ">
      <div className="w-10 h-10 bg-purple-200 rounded-lg mb-4 flex items-center justify-center">
        <i className="fas fa-lock text-purple-600 text-2xl"></i>
      </div>
      <h4 className="text-lg font-bold">Secure Payments</h4>
      <p className="font-bold mt-2 text-gray-600">
        At Eventio, your privacy is our priority. Book securely and enjoy your favorite events with peace of mind your information stays safe with us.
      </p>
    </div>
  </div>
</section>




      {/* App Demo Section */}
      <section className="text-center py-12">
  <h2 className="text-2xl font-bold m-6">- <span className='text-[#5516DA]'>App</span> Demo</h2>
  <div 
    className="bg-purple-200 mx-auto rounded-2xl shadow-lg"
    style={{ maxWidth: '90%', height: '500px' }} // Responsive max width
  >
    {/* Optional: You can add content here, like an image or demo */}
  </div>
</section>
    </div>
  );
};

export default Banner;
