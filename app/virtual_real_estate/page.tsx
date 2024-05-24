"use client";
import ShowroomCards from "@/components/showroom/Cards";
import React, { useEffect, useState } from "react";

const VirtualRealEstatePage = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
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
            src="./homepage/virtual-real-estate-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex gap-12 flex-col justify-center items-center">
          <div className="text-center flex flex-col gap-4">
            <h1 className="uppercase text-white font-bold text-[14px] md:text-[24px] m-0 p-0 leading-[0.8] ">
              VIRTUAL REAL ESTATE
            </h1>
            <div className="md:block hidden">
              <p className="text-white text-[48px] m-0 p-0 leading-none">
                Tour properties, envision layouts, and experience the
              </p>
              <p className="text-white text-[48px] m-0 p-0 leading-none">
                potential of your next dream space.
              </p>
            </div>
            <div className="md:hidden block">
              <p className="text-white text-[24px] md:text-[48px] m-0 p-0 leading-none">
                Tour properties,
              </p>
              <p className="text-white text-[24px] md:text-[48px] m-0 p-0 leading-none">
                envision layouts, and
              </p>
              <p className="text-white text-[24px] md:text-[48px] m-0 p-0 leading-none">
                experience the
              </p>
              <p className="text-white text-[24px] md:text-[48px] m-0 p-0 leading-none">
                potential of your next dream space.
              </p>
              <p className="text-white text-[24px] md:text-[48px] m-0 p-0 leading-none">
                dream space.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 py-4">
        <div className="px-4 md:px-20">
          <ShowroomCards
            bgImg="./showroomcards/vmc-showroom-bg.svg"
            title="VMC"
            url="/"
            design="py-0 md:py-60 aspect-square md:aspect-auto"
            roomtype="Virtual real estate"
          ></ShowroomCards>
        </div>
        <div className="px-4 md:px-20 flex flex-col md:flex-row gap-x-4 py-4 gap-y-4">
          <ShowroomCards
            bgImg="./showroomcards/residential-showroom-bg.svg"
            title="Residential"
            url="/"
            design="aspect-square md:aspect-[1.15/1]"
            roomtype="VIRtual real estate"
          ></ShowroomCards>
          <ShowroomCards
            bgImg="./showroomcards/commercial2-showroom-bg.svg"
            title="Commercial"
            url="/"
            design="aspect-square md:aspect-[1.15/1]"
            roomtype="VIRtual real estate"
          ></ShowroomCards>
        </div>
      </div>
    </>
  );
};

export default VirtualRealEstatePage;
