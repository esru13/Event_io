import React from "react";

import Card from "./card";
function Home() {
  return (
    <div className="bg-purple-200   mt-36">
     <div className=" text-center font-bold">
    <h1> Benefits of our <span className="text-[#5516DA]">eventio</span></h1>
    <p className="text-2xl">  our <span className="text-[#5516DA]">Event Booking app </span> provide</p>

     </div>
    
     <div className="flex"> 

<Card />
<Card />
<Card />

</div>
</div> 
  )
}


export default Home
