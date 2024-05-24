"use client";
import Slider from "@/components/Banner/Slider";
import React, { useEffect, useState } from "react";

const OurVirtualExperiences = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollOffset]);

  return (
    <div className="relative w-screen h-screen">
      <video
        className={`top-0 left-0 w-full h-full object-cover ${
          scrollOffset >= 6000 && "-z-10 fixed "
        }`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="./homepage/ourvirtualexperiences-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex gap-12 flex-col justify-center items-center">
        <div className="text-center flex flex-col gap-4">
          <p className="uppercase text-white font-bold text-[14px] md:text-[20px] m-0 p-0 leading-[0.8] ">
            our virtual experiences
          </p>
          <div className="hidden md:block">
            <p className="text-white text-[48px] m-0 p-0 leading-none">
              Explore our works and how we do
            </p>
            <p className="text-white text-[48px] m-0 p-0 leading-none">
              things
            </p>
          </div>
          <div className="block md:hidden">
            <p className="text-white text-[24px] m-0 p-0">Explore our works</p>
            <p className="text-white text-[24px] m-0 p-0">
              and how we do things
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVirtualExperiences;
