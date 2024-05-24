"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselItems = [
  {
    id: 1,
    imgUrl: "http://localhost:3000/1clickdesign-logo-black.svg",
    altTxt: "Sponsor Logo",
  },
  {
    id: 2,
    imgUrl: "http://localhost:3000/about/about-slider.png",
    altTxt: "Sponsor Logo",
  },
  {
    id: 3,
    imgUrl: "http://localhost:3000/socialmedia/email.svg",
    altTxt: "Sponsor Logo",
  },
  {
    id: 4,
    imgUrl: "http://localhost:3000/socialmedia/facebook.svg",
    altTxt: "Sponsor Logo",
  },
  {
    id: 5,
    imgUrl: "http://localhost:3000/1clickdesign-logo-black.svg",
    altTxt: "Sponsor Logo",
  },
  {
    id: 6,
    imgUrl: "http://localhost:3000/socialmedia/skype.svg",
    altTxt: "Sponsor Logo",
  },
];

const PartnersSlider = () => {
  return (
    <div className="bg-[#0E2D63] py-10 text-white">
      <div className="text-center mb-4">
        <p className="font-medium uppercase">trusted by our brand partners</p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full max-w-[120%] mx-auto"
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <div className="flex justify-center items-center px-10">
                <img
                  className="mx-auto w-full object-contain max-h-[120px]"
                  src={item.imgUrl}
                  alt={item.altTxt}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PartnersSlider;
