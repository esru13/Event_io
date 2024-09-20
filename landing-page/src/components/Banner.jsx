import React from 'react';
import logo from '../assets/image.png';
import circs from '../assets/circs.png';

const Banner = () => {
  return (
    <div className='bg-[#F3F4FF] px-0 lg:px-14 py-32'>
      <div className='max-w-7xl w-full mx-0 flex flex-col lg:flex-row items-center justify-between'>
        <div className='text-black text-center lg:text-left mb-8 lg:mb-0 lg:mr-32 px-6 lg:px-0'>
          <p className='mb-4 font-bold lg:w-3/5 leading-snug text-left'>
            -The Best Event Booking App
          </p>
          <h1 className='text-left text-3xl lg:text-7xl leading-snug font-bold mb-5'>
            The Ultimate <span className='text-[#5516DA]'>Event Booking</span> Experience
          </h1>
          <p className='font-bold lg:w-3/5 mb-6'>
            Discover and book unforgettable events with <span className='text-[#5516DA]'>Eventio</span>. From concerts to conferences, find and secure your tickets effortlessly.
          </p>

          {/* Download Buttons */}
          <div className='flex justify-center lg:justify-start'>
            <a href='https://play.google.com/store' className='mr-4' target="_blank" rel="noopener noreferrer">
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                alt='Download from Google Play'
                className='h-12'
              />
            </a>
            <a href='https://www.apple.com/app-store/' target="_blank" rel="noopener noreferrer">
              <img
                src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                alt='Download from App Store'
                className='h-12'
              />
            </a>
          </div>

          <div className='flex items-center mt-4'>
            <img src={circs} alt="Worldwide Users" className='h-26 w-26 mr-1' />
            <div className='flex flex-col px-0 lg:px-2'> 
              <span className='text-xl font-bold'>50k</span>
              <span className='text-lg font-semibold'>Worldwide users</span>
            </div>
          </div>
        </div>

        <div className='lg:ml-auto lg:flex pb-24 lg:items-start lg:justify-end'>
          <img
            src={logo}
            alt="Logo"
            className='lg:w-[600px] w-80 lg:h-auto h-auto lg:mt-0 mt-8' 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
