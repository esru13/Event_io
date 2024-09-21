import React from 'react';
import logo2 from '/assets/logo2.png'; // Changed logo path
import circs from '/assets/circs.png';

const Banner = () => {
  return (
    <div className='bg-[#F3F4FF] px-6 py-32 flex flex-col lg:flex-row items-center'>
      <div className='text-black text-center lg:text-left mb-8 lg:mb-0 lg:mr-32 lg:ml-16'>
        <p className='mb-4 font-bold lg:w-3/5 leading-snug'>
          - The Best <span className='text-[#5516DA]'>Event Booking App</span>
        </p>

        <h1 className='text-3xl lg:text-7xl leading-snug font-bold mb-5'>
          The Ultimate <span className='text-[#5516DA]'>Event</span> <br />
          <span className='text-[#5516DA]'>Booking</span> Experience
        </h1>

        <p className='font-bold lg:w-3/5 mb-6'>
          Discover and book unforgettable events with <span className='text-[#5516DA]'>Eventio</span>. From concerts to conferences, find and secure your tickets effortlessly.
        </p>
        
        {/* Download Buttons */}
        <div className='flex justify-center lg:justify-start mb-4'>
          <a href='#' className='mr-4'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
              alt='Download from Google Play'
              className='h-12 hover:scale-105 transition-transform duration-300'
            />
          </a>

          <a href='#'>
            <img
              src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
              alt='Download from App Store'
              className='h-12 hover:scale-105 transition-transform duration-300'
            />
          </a>
        </div>

        {/* Users Section */}
        <div className='flex items-center justify-center lg:justify-start'>
          <img src={circs} alt="Worldwide Users" className='h-26 w-26 mr-4' />
          <div className='flex flex-col'>
            <span className='text-xl font-bold'>50k</span>
            <span className='text-lg font-semibold'>Worldwide users</span>
          </div>
        </div>
      </div>

      <div className='flex justify-start items-center lg:ml-0 lg:mr-11'> {/* Adjusted to move logo left */}
        <img src={logo2} alt="Logo" className='h-70 lg:h-[30rem] lg:w-[46rem] w-auto' />
      </div>
    </div>
  );
};

export default Banner;
