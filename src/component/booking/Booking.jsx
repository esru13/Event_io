import React from "react";
import Nav from "../navigation/Nav";

 
 
 function Booking() {
   return (
         
<div className=" container  pl-48 ">
<div className="font-black  mt-48  ">

<h  > The Best Event Booking app</h>

</div>
    <div className="  mt-12  " >
    <h1 className="w-[32rem]  font-bold  text-5xl">  The Ultimate <samp className="text-[#5516DA]">Event Booking</samp> Experience </h1>

   <p className="mt-10 w-[500px] font-bold"> discover and book unforgettable events with <span className="text-[#5516DA]">eventio </span>from cencerts to confernces find and secure your tickets effortlessly   </p>
    </div>
   <img src="./Group 516.png" class="xl:absolute top-[193px] right-0" alt="" />
   <div class="flex space-x-[-20px] mt-28" >
  <div class="w-16 h-16 bg-yellow-500 rounded-full"></div>
  <div class="w-16 h-16 bg-purple-600 rounded-full"></div>
  <div class="w-16 h-16 bg-yellow-600 rounded-full"></div>
  <div class="w-16 h-16 bg-red-500 rounded-full"></div>
  <div class="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
    <span class="text-black text-xl">+</span>
  </div>
</div>

</div>

   )
 }
 
 export default Booking
 