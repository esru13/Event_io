import React from 'react';
import logo from '/assets/logos/image.png';


const Banner = () => {
  return (
    <div className='bg-blue-50 px-6 py-32 flex flex-col lg:flex-row items-center'>
      <div className='text-black text-center lg:text-left ml- mb-8 lg:mb-0 lg:mr-32'>
        <p className='mb-4 font-bold lg:w-3/5 leading-snug text-left'>
          -The Best Event Booking App
        </p>
        <h1 className='text-left text-3xl lg:text-7xl leading-snug font-bold mb-5'>
          The Ultimate <span className=' text-[#5516DA]'>Event Booking</span> Experience
        </h1>
        <p className='font-bold lg:w-3/5'>
          Discover and book unforgettable events with <span className='text-[#5516DA]'>Eventio</span>. From concerts to conferences, find and secure your tickets effortlessly.
        </p>
      </div>
      <div className='text-left flex justify-center items-center'>
        <img src={logo} alt="Logo" className='px-10 mt-8 lg:mt-0' />
      </div>
    </div>
  );
};

export default Banner;
