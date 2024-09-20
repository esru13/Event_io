import React from "react";

// HowCard Component
const HowCard = ({ img, title, description }) => {
  return (
    <div className="flex gap-3 md:gap-5 items-center h-fit w-fit px-4 ">
      <img className="h-[70px] w-[70px]" src={img} alt="" />
      <div className="flex flex-col gap-1">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <p className="text-xs md:pr-32 text-justify text-wrap">
          {description}
        </p>
      </div>
    </div>
  );
};

// How Component
const How = () => {
  return (
    <div>
      <div className="bg-[#F3F4FF] text-center text-black px-4"> {/* Reduced padding from pt-28 to pt-16 */}
      <h2 className="text-xl leading-snug font-semibold mb-3">
  - How it <span className="text-[#5516DA]">works</span>?
</h2>

        <h2 className="text-2xl leading-snug font-bold">
          How it works? A step by step Guide
        </h2>
      </div>
      <div className="flex flex-col gap-16 md:gap-0 md:flex-row py-20 bg-[#F3F4FF]">
        <div className="flex flex-1 justify-center items-center pt-0 md:pt-10">
          <div className="flex justify-center items-center w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#E1DCFF] rounded-full relative">
            <img
              className="h-[40px] md:h-[60px] absolute -bottom-5 md:-bottom-10 left-1/3"
              src="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726776172/Group_457_j1fgep.png"
              alt=""
            />
            <img
              className="h-[40px] md:h-[60px] absolute top-1/3 -left-1/3"
              src="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726776172/Group_527_jaytsn.png"
              alt=""
            />
            <img
              className="h-[40px] md:h-[60px] absolute -top-5 md:-top-10 left-1/3"
              src="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726776172/Group_459_iln0ia.png"
              alt=""
            />
            <img
              className="h-[40px] md:h-[80px]"
              src="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757388/Group_528_eujnzp.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-1 gap-8 flex-col">
          <HowCard
            description="Join Eventio by signing up to unlock access to exclusive events. Complete the sign-up process to get started and enjoy a personalized experience tailored to your preferences."
            title="Sign up"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726776172/Group_signUp_nlgyxu.png"
          />
          <HowCard
            description="Customize your Eventio experience by creating your profile and adding your event preferences. Tell us what you love, and we’ll recommend events tailored just for you!"
            title="Create Profile & Add Preferences"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757388/Group_CreateProfile_dmnlnh.png"
          />
          <HowCard
            description="Explore exciting events happening! Use Eventio to find nearby events that match your interests and make the most of what's happening around you."
            title="Discover Events Near You"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726776172/Group_Discover_mrbthy.png"
          />
          <HowCard
            description="Easily secure your spot at the hottest events with Eventio. Browse, choose your tickets, and book in just a few clicks."
            title="Book Your Favourite Events"
            img="https://res.cloudinary.com/dltnxkfrn/image/upload/v1726776173/Group_Discover_xgsmz4.png"
          />
        </div>
      </div>
    </div>
  );
};

export default How;
