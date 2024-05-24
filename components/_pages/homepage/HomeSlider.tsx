"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";
const HomeSlider = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [firstItemHeight, setFirstItemHeight] = useState(0);
  const carouselContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (carouselContentRef.current) {
      const firstItem = carouselContentRef.current.children[0] as HTMLElement;
      setFirstItemHeight(firstItem.offsetHeight);
    }
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <video
        className={`top-0 left-0 w-full h-full object-cover ${
          scrollOffset <= 1000 && "-z-10 fixed "
        }`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./homepage/welcome-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute w-full h-full top-0 left-0 bg-black opacity-50"
        style={{ zIndex: "-10" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex gap-12 flex-col justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent
            ref={carouselContentRef}
            style={{ height: `${firstItemHeight}px` }}
          >
            <CarouselItem className="">
              <div className="text-center">
                <p className="uppercase text-white text-[36px] md:text-[58px]  m-0 p-0 leading-[0.8] ">
                  TURN YOUR IDEAS
                </p>
                <p className="uppercase text-white text-[36px] md:text-[58px] m-0 p-0 leading-none">
                  INTO <span className="font-black">VIRTUAL</span> REALITY
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="text-center">
                <p className="uppercase text-white text-[36px] md:text-[58px] m-0 p-0 leading-[0.8] ">
                  Producing Worlds <span className="font-black">Most</span>
                </p>
                <p className="uppercase text-white text-[36px] md:text-[58px]  m-0 p-0 leading-none">
                  <span className="font-black">Advance</span> Virtual Space
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <a href="#requestDemo">
          <Button className="uppercase text-[12px] md:text-[16px] font-extrabold py-8 px-6 rounded-full bg-[#0E2D63]">
            Request a demo
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomeSlider;
