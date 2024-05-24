import Slider from "@/components/Banner/Slider";
import ShowroomCards from "@/components/showroom/Cards";
import React from "react";

const VirtualShowroomPage = () => {
  return (
    <>
      <Slider
        bgImg="./about/about-slider.png"
        title="VIRTUAL SHOWROOMS"
        description="Explore products in an immersive environment without leaving the comfort of your home."
        videoUrl="./homepage/ourvirtualexperiences-video.mp4"
      ></Slider>
      <div className="bg-white py-4">
        <div className="px-4 md:px-20 aspect">
          <ShowroomCards
            bgImg="./showroomcards/mgbw-showroom-bg.svg"
            title="MGBW"
            url="/"
            design="py-0 md:py-60 aspect-square md:aspect-auto"
            roomtype="VIRTUAL SHOWROOMS"
          ></ShowroomCards>
        </div>
        <div className="px-4 md:px-20 flex flex-col md:flex-row gap-x-4 py-4 gap-y-4">
          <ShowroomCards
            bgImg="./showroomcards/modevie-showroom-bg.svg"
            title="Mode de vie"
            url="/"
            design="aspect-square md:aspect-[1.15/1]"
            roomtype="VIRTUAL SHOWROOMS"
          ></ShowroomCards>
          <ShowroomCards
            bgImg="./showroomcards/ashley-showroom-bg.svg"
            title="Ashley Furniture"
            url="/"
            design="aspect-square md:aspect-[1.15/1]"
            roomtype="VIRTUAL SHOWROOMS"
          ></ShowroomCards>
        </div>
      </div>
    </>
  );
};

export default VirtualShowroomPage;
