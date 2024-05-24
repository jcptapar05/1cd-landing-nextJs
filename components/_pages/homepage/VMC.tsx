import { Button } from "@/components/ui/button";
import React from "react";

const VMC = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src="./coming_soon.svg"
        alt="vmc"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[50%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-center px-4">
        <img
          src="./vmc-logo.png"
          alt="vmc"
          className="w-full max-w-[100px] md:max-w-[177px] object-cover mx-auto"
        />
        <h3 className="text-white text-3xl md:text-[48px] leading-normal my-16">
          The First Virtual Market Center in the Metaverse
        </h3>
        <Button className="bg-[#FFA800] text-base hover:bg-[#FFA800] bg-opacity-70 hover:bg-opacity-100 px-5 py-7 rounded-full mx-auto">
          COMING SOON
        </Button>
      </div>
    </div>
  );
};

export default VMC;
