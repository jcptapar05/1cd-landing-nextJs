"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  {
    id: 1,
    txt: "Decor",
  },
  {
    id: 2,
    txt: "Area rug",
  },
  {
    id: 3,
    txt: "carpet",
  },
  {
    id: 4,
    txt: "tile",
  },
  {
    id: 5,
    txt: "slab",
  },
  {
    id: 6,
    txt: "countertop",
  },
  {
    id: 7,
    txt: "ART",
  },
  {
    id: 8,
    txt: "wall art",
  },
];

const ProductsWeWorkedWith = () => {
  const autoplayInstance = Autoplay({
    delay: 1800,
    stopOnInteraction: false,
  });

  //  autoplayInstance.reset();

  return (
    <div className="py-7 bg-white">
      <div className="text-center mb-4">
        <p className="font-medium text-[14px] md:text-[24px] uppercase text-[#0E2D63]">PRODUCTS WE WORKED WITH</p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: "rtl",
          duration: 1800,
          dragFree: true,
        }}
        plugins={[autoplayInstance]}
        className="w-full max-w-[120%] mx-auto"
      >
        <CarouselContent style={{ direction: "rtl" }}>
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/8"
            >
              <div className="flex justify-center items-center px-10 text-center">
                <p className="text-[#A9A9A9] text-[24px]  md:text-[40px] whitespace-nowrap font-bold uppercase">
                  {item.txt}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductsWeWorkedWith;
