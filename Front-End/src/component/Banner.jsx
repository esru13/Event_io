import React from 'react';
import logo from '/assets/logos/image.png';
import circs from '/assets/circs.png';

const Banner = () => {
  return (
    <div className='bg-[#F3F4FF] px-6 py-32 flex flex-col lg:flex-row items-center'>
      <div className='text-black text-center lg:text-left ml- mb-8 lg:mb-0 lg:mr-32'>
      <p className='ml-16 mb-4 font-bold lg:w-3/5 leading-snug text-left'>
    - The Best <span className='text-[#5516DA]'>Event Booking App</span>
</p>

        <h1 className=' ml-16 text-left text-3xl lg:text-7xl leading-snug font-bold mb-5'>
          The Ultimate <span className=' text-[#5516DA]'>Event Booking</span> Experience
        </h1>
        <p className=' ml-16 font-bold lg:w-3/5 mb-6'>
          Discover and book unforgettable events with <span className='text-[#5516DA]'>Eventio</span>. From concerts to conferences, find and secure your tickets effortlessly.
        </p>
        
        {/* Download Buttons */}
        <div className=' ml-16 flex justify-center lg:justify-start'>
          <a href='#' className='mr-4'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
              alt='Download from Google Play'
              className='h-12'
            />
          </a>
          <a href='#'>
            <img
              src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
              alt='Download from App Store'
              className='h-12'
            />
          </a>
        </div>

        {/* New Section for Users */}
        <div className='ml-16 flex items-center mt-4'>
  <img src={circs} alt="Worldwide Users" className='h-26 w-26 mr-4' />
  <div className='flex flex-col'>
    <span className='text-xl font-bold'>50k</span>
    <span className='text-lg font-semibold'>Worldwide users</span>
  </div>
</div>

      </div>
      <div className='text-left flex justify-center items-center'>
        <img src={logo} alt="Logo" className='px-10 mt-8 lg:mt-0' />
      </div>

      
    </div>
  );
};

export default Banner;