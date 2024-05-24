import Slider from "@/components/Banner/Slider";
import ShowroomCards from "@/components/showroom/Cards";
import React from "react";

const VirtualShowroomPage = () => {
  return (
    <>
      <Slider
        bgImg="./showroomcards/soak-showroom-bg.svg"
        title="VIRTUAL ART GALLERY"
        description="Immerse yourself in the world of creativity with Virtual Art Galleries."
      ></Slider>
      <div className="bg-white mt-4 py-4">
        <div className="px-4 md:px-20">
          <ShowroomCards
            bgImg="./showroomcards/neopolitan-showroom-bg.svg"
            title="Neapolitan Dream"
            url="/"
            design="py-0 md:py-60 aspect-square md:aspect-auto"
            roomtype="VIRTUAL ART GALLERY"
          ></ShowroomCards>
        </div>
        <div className="px-4 md:px-20 flex flex-col md:flex-row gap-x-4 py-4 gap-y-4">
          <ShowroomCards
            bgImg="./showroomcards/mytoparts-showroom-bg.svg"
            title="My Top Arts"
            url="/"
            design="aspect-square md:aspect-[1.15/1]"
            roomtype="VIRTUAL ART GALLERY"
          ></ShowroomCards>
          <ShowroomCards
            bgImg="./showroomcards/paat-showroom-bg.svg"
            title="PA/AT"
            url="/"
            design="aspect-square md:aspect-[1.15/1]"
            roomtype="VIRTUAL ART GALLERY"
          ></ShowroomCards>
        </div>
      </div>
    </>
  );
};

export default VirtualShowroomPage;
