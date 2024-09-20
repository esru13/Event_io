import React, { useState } from 'react';
import Booking from '../booking/Booking';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return(
    <nav className=' flex items-center bg-[#5516DA] text-white  '>
 
      <h1 class="  pl-12 text-1xl text-[#C0B7E8]">  EVENTIO</h1>
        <ul class="flex-1 text-center ">
    
     <li class="list-none inline-block px-5 "> <a href="#Home"class="no-underline text-white px-5  hover:text-black" > Home</a></li>
     <li class="list-none inline-block px-5  "> <a href="#About" onclick="about"  class="no-underline text-white px-5  hover:text-black"> Features</a></li>
     <li class="list-none inline-block px-5 "> <a href="#"class="no-underline text-white px-5  hover:text-black"> How it works</a></li>
     <li class="list-none inline-block px-5 "> <a href="#"class="no-underline text-white px-5  hover:text-black"> Testimonial</a></li>
    </ul>
    <div class="flex " >  
   <a href="# " class="inline-block px-6 py-3  text-white border  bg-black rounded-full text-lg  px-3 py-3 mx-3 " >Get the app</a>
   <a href="#" class="inline-block px-6 py-3 text-center text-[#ffff] bg-black border  rounded-full text-lg px-4 py-3 mx-3 " >sign in</a>
</div>
      
      
      
      
      

  

    </nav>

  )
}
export default Nav