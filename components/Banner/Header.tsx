"use client";
import React from "react";

type HeaderType = {
  title: string;
  description: string;
  bgImg: string;
};

const Header: React.FC<HeaderType> = ({ title, description, bgImg }) => {
  return (
    <div className="w-screen md:h-fit bg-red-500 relative h-[150px]">
      <img src={bgImg} alt="" className="w-full h-full object-cover" />
      <div className="flex flex-col w-full h-full text-white justify-center items-center absolute top-0">
        <p className="font-semibold text-[14px] md:text-[48px] pb-1 md:pb-2">
          {title}
        </p>
        <hr className="text-white w-[5%] py-1 md:py-2" />
        <p className="text-[12px] md:text-[24px] uppercase leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;
