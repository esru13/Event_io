import React from "react";
import Card from "../components/card";
const Features = () => {
  return (
    <div>
      <div className="py-40 bg-[#F3F4FF] text-center text-white">
        <div className="flex flex-col w-full rounded-b-3xl h-[500px] bg-[#5516DA] pl-3 md:pl-20 lg:pl-40 pt-16">
          <div className="flex flex-col w-fit justify-left">
            <h1 className="text-lg font-bold text-white text text-left pl-5 mb-5">
              Best Features
            </h1>
            <h1 className=" font-bold text-white text-left text-3xl mb-1">
              Key Features of Our
            </h1>
            <h1 className=" font-bold text-black text-left text-3xl">
              Event Booking app
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center -mt-[275px]  w-full">
          <Card
            title1="Explore Your"
            title2="Event"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757390/Screenshot_774_2_qlmlwk.png"
            description="Explore events across categories—music, art, sports, and more. Find what excites you and make memories"
            position={true}
          />
          <Card
            title1="Select Your"
            title2="Events"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757390/Screenshot_776_1_yk5age.png"
            description="Choose from a variety of events that match your interests. Find your favorites and get ready to attend!"
            position={false}
          />
          <Card
            title1="Buy Your"
            title2="Ticket"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757390/Screenshot_778_1_sxvn4g.png"
            description="Easily purchase tickets with a few clicks. Secure your spot and get ready for an unforgettable experience!"
            position={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
