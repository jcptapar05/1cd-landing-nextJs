import ShowroomCards from "@/components/showroom/Cards";
import React from "react";

const Showrooms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 py-4 md:py-10 bg-white">
      <ShowroomCards
        bgImg="./showroomcards/modevie-showroom-bg.svg"
        title="Mode de vie"
        url="https://vr.1clickdesign.com/mode_de_vie/#autoplay"
        design="rounded-[40px] aspect-square"
        roomtype="VIRTUAL SHOWROOM"
      ></ShowroomCards>

      <ShowroomCards
        bgImg="./showroomcards/metropolitan-showroom-bg.svg"
        title="Metropolitan City"
        url="https://vr.1clickdesign.com/plateau_1b/#autoplay"
        design="rounded-[40px] aspect-square"
        roomtype="VIRTUAL REAL ESTATE"
      ></ShowroomCards>

      <ShowroomCards
        bgImg="./showroomcards/mytoparts-showroom-bg.svg"
        title="My Top Arts"
        url="https://vr.1clickdesign.com/my_top_arts/#autoplay"
        design="rounded-[40px] aspect-square"
        roomtype="VIRTUAL ART GALLERY"
      ></ShowroomCards>

      <ShowroomCards
        bgImg="./showroomcards/ashley-showroom-bg.svg"
        title="Ashley Showroom"
        url="https://vr.1clickdesign.com/ashley/#autoplay"
        design="rounded-[40px] aspect-square"
        roomtype="VIRTUAL SHOWROOM"
      ></ShowroomCards>

      <ShowroomCards
        bgImg="./showroomcards/m&b-showroom-bg.svg"
        title="MGBW"
        url="https://vr.1clickdesign.com/mgbw/#autoplay"
        design="rounded-[40px] aspect-square"
        roomtype="VIRTUAL SHOWROOM"
      ></ShowroomCards>

      <ShowroomCards
        bgImg="./showroomcards/commercial-area-showroom-bg.svg"
        title="Commercial Area"
        url="/"
        design="rounded-[40px] aspect-square"
        roomtype="VIRTUAL REAL ESTATE"
      ></ShowroomCards>
    </div>
  );
};

export default Showrooms;
