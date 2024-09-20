import React from "react";

const HowCard = ({ img, title, description }) => {
  return (
    <div className="flex gap-3 md:gap-5 items-center h-fit w-fit px-4 ">
      <img className="h-[70px] w-[70px]" src={img} alt="" />
      <div className="flex flex-col gap-1">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <p className="text-xs   md:pr-32 text-justify text-wrap ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowCard;
