import React from 'react';
import logo from "/ticket.png";
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlay, FaApple, FaLinkedin } from "react-icons/fa";
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='w-full bg-blue-50'>
            {/* Top Banner Section */}
            <div className='bg-[#7C4DFF] rounded-t-3xl sm:pt-6 mx-4 sm:mx-14 p-4 sm:p-6 text-center'>
                <p className='text-white sm:text-lg sm:pr-10'>Your Destination for Affordable and Exciting Experiences!</p>
                <h1 className="font-bold text-2xl sm:pt-1 sm:text-4xl text-white">Download the App Now!</h1> 
            </div>

            <div className='bg-gradient-to-b from-[#5516DA] to-black'>
    {/* App Store Links Section */}
    <div className='bg-[#7C4DFF] mx-4 sm:mx-14 p-2 sm:p-4 text-center mb-4 rounded-b-3xl'> 
    <div className='flex justify-center mb-4'>
        <div className='flex flex-col sm:flex-row gap-4 sm:pb-0 mx-4 sm:mx-14'>
            {/* Google Play Button */}
            <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-200 flex flex-col items-center p-3 bg-[#611df4] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-[#5516DA] hover:-translate-y-1 transform hover:scale-105"
            >
                <span className="text-white text-xs ml-2 font-semibold">GET IT ON</span>
                <div className="flex items-center">
                    <FaGooglePlay className="text-white text-3xl" />
                    <span className="ml-2 text-white font-bold">Google Play</span>
                </div>
            </a>

            {/* App Store Button */}
            <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-200 flex flex-col items-center p-3 bg-[#611df4] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-[#5516DA] hover:-translate-y-1 transform hover:scale-105"
            >
                <span className="pl-10 text-white text-xs font-semibold">Download on the</span>
                <div className="flex items-center">
                    <FaApple className="text-white text-3xl" />
                    <span className="ml-2 text-xl text-white font-medium">App Store</span>
                </div>
            </a>
        </div>
    </div>
</div>


    {/* Footer Content Section */}
    <div className='px-4 pt-6 sm:pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16'>
        <div className='flex flex-col sm:flex-row items-start justify-between gap-8 mb-4 -mt-4'>
            {/* Logo and Eventio */}
            <div className='flex flex-col items-start flex-shrink-0'>
                <div className='flex items-center mb-2'>
                    <img src={logo} alt="Logo" className="h-6 px-2 -ml-3" />
                    <a href="/" className="text-xl text-white">EVENTIO</a>
                </div>
                <p className='text-[#ffffff]'>Your gateway to unforgettable events.</p>

                {/* Social Media Icons Section */}
                <div className='flex mt-4 space-x-6'>
                    <a
                        href='https://twitter.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-all duration-300'
                    >
                        <FaTwitter className='text-white text-4xl hover:text-black' />
                    </a>
                    <a
                        href='https://instagram.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-all duration-300'
                    >
                        <FaInstagram className='text-white text-4xl hover:text-black' />
                    </a>
                    <a
                        href='https://facebook.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-all duration-300'
                    >
                        <FaFacebook className='text-white text-4xl hover:text-black' />
                    </a>
                    <a
                        href='https://linkedin.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-all duration-300'
                    >
                        <FaLinkedin className='text-white text-4xl hover:text-black' />
                    </a>
                </div>
            </div>

            {/* Links and Contact Section */}
            <div className="flex flex-col sm:flex-row gap-16">
                {/* Company Links */}
                <div className="flex flex-col gap-2">
    <p className='font-medium tracking-wide text-[#ffffff]'>Company</p>
    <Link to="home" smooth={true} duration={500} className='text-[#cccccc] hover:text-white cursor-pointer'>Home</Link>
    <Link to="features" smooth={true} duration={500} className='text-[#cccccc] hover:text-white cursor-pointer'>Features</Link>
    <Link to="services" smooth={true} duration={500} className='text-[#cccccc] hover:text-white cursor-pointer'>Services</Link>
    <Link to="aboutus" smooth={true} duration={500} className='text-[#cccccc] hover:text-white cursor-pointer'>About Us</Link>
    <Link to="contactus" smooth={true} duration={500} className='text-[#cccccc] hover:text-white cursor-pointer'>Contact Us</Link>
</div>


                {/* Contact Section */}
                <div className="flex flex-col gap-2">
                    <p className='font-medium tracking-wide text-[#ffffff]'>Contact</p>
                    <a href="#" className='text-[#cccccc] hover:text-white'>(251) 1234-21313</a>
                    <a href="#" className='text-[#cccccc] hover:text-white'>www.eventio.com</a>
                    <a href="#" className='text-[#cccccc] hover:text-white'>eventio@gmail.com</a>
                    <a href="#" className='text-[#cccccc] hover:text-white'>Addis Ababa, Ethiopia</a>
                </div>
            </div>

            {/* Subscribe Section */}
            <div className='flex flex-col'>
  <p className='font-medium tracking-wide text-[#ffffff] mb-4'>Get the latest info</p>
  <form className='flex sm:flex-row'>
    <input type='email' placeholder='Email address' name='email' id='email' className='bg-[#4F4F4F] w-full h-12 px-4 transition duration-200 focus:border-purple-400 focus:outline-none rounded-l-xl' />
    <button type='submit' className='h-12 w-20 px-2 font-medium tracking-wide border-[#35313e] hover:text-[#D9D9D9] text-[#35313e] transition duration-200 hover:bg-[#4F4F4F] bg-white rounded-r-xl flex items-center justify-center'>
      <FaPaperPlane className="w-5 h-5" />
    </button>
  </form>
</div>

        </div>

        <div className='flex flex-col sm:flex-row justify-between pt-5 pb-10 border-t border-white'>
            <p className='text-sm text-white'>© Copyright 2024 | All rights reserved.</p>
            <p className='flex items-center mt-2 sm:mt-0 space-x-4 text-white'>User Terms & Condition | Privacy Policy.</p>
        </div>
    </div>
</div>
        </div>
    );
}

export default Footer;
