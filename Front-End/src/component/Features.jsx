import React from "react";

const Features = () => {
  const cardData = [
    {
      title1: "Explore Your",
      title2: "Event",
      img: "https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757390/Screenshot_774_2_qlmlwk.png",
      description:
        "Explore events across categories—music, art, sports, and more. Find what excites you and make memories",
      position: true,
    },
    {
      title1: "Select Your",
      title2: "Events",
      img: "https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757390/Screenshot_776_1_yk5age.png",
      description:
        "Choose from a variety of events that match your interests. Find your favorites and get ready to attend!",
      position: false,
    },
    {
      title1: "Buy Your",
      title2: "Ticket",
      img: "https://res.cloudinary.com/dltnxkfrn/image/upload/v1726757390/Screenshot_778_1_sxvn4g.png",
      description:
        "Easily purchase tickets with a few clicks. Secure your spot and get ready for an unforgettable experience!",
      position: true,
    },
  ];

  return (
    <div className="py-40 bg-[#F3F4FF] text-center text-white">
      <div className="flex flex-col w-full h-[500px] bg-gradient-to-br bg-black pl-3 md:pl-20 lg:pl-40 pt-16">
        <div className="flex flex-col w-fit justify-left">
          <h1 className="text-lg font-bold text-white text-left pl-5 mb-5">
            Best Features
          </h1>
          <h1 className="font-bold text-white text-left text-3xl mb-1">
            Key Features of Our
          </h1>
          <h1 className="font-bold text-[#5516DA] text-left text-3xl">
            Event Booking app
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center -mt-[275px] w-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title1={card.title1}
            title2={card.title2}
            img={card.img}
            description={card.description}
            position={card.position}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title1, title2, description, img, position }) => {
  return (
    <div className="w-[400px] h-[597px] flex-shrink-0 rounded-[28px] bg-white flex justify-center items-center flex-col p-5 hover:scale-105 cursor-pointer transition-all duration-300">
      <h3 className={`${!position ? "hidden" : ""} text-[27px] font-bold text-black`}>
        {title1} <span className="text-[#5516DA]">{title2}</span>
      </h3>
      <p className={`${!position ? "hidden" : ""} text-black text-center text-[12px] font-bold px-[14px]`}>
        {description}
      </p>
      <img src={img} alt="Screen Shoot" className="w-[214px] h-[430px] flex-shrink-0 mt-5" />
      <h3 className={`${position ? "hidden" : ""} text-[27px] font-bold text-black`}>
        {title1} <span className="text-[#5516DA]">{title2}</span>
      </h3>
      <p className={`${position ? "hidden" : ""} text-black text-center text-[12px] font-bold px-[14px]`}>
        {description}
      </p>
    </div>
  );
};

const HowCard = ({ img, title, description }) => {
  return (
    <div className="flex gap-3 md:gap-5 items-center h-fit w-fit px-4">
      <img className="h-[70px] w-[70px]" src={img} alt="" />
      <div className="flex flex-col gap-1">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <p className="text-xs md:pr-32 text-justify text-wrap">{description}</p>
      </div>
    </div>
  );
};

export default Features;
