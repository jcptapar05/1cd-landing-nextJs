"use client";
import React from "react";

import { motion, inView, useScroll } from "framer-motion";

type SliderType = {
  title: string;
  description: string;
  videoUrl?: string;
};

const SliderProduct: React.FC<SliderType> = ({
  title,
  description,
  videoUrl,
}) => {
  return (
    <div className="w-screen h-screen relative">
      <video
        autoPlay
        muted
        loop
        className="-z-20 w-full fixed h-screen object-cover top-0  left-0"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div
        className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent opacity-50"
        style={{ zIndex: "-10" }}
      ></div>
      <div className="absolute left-0 md:left-8 bottom-8 md:bottom-44 px-4 md:px-20 max-w-[1000px] mx-auto text-white">
        <div>
          <p className="uppercase font-bold text-[14px] md:text-[20px]">
            {title}
          </p>
          <p className="text-[24px] md:text-[48px] leading-tight drop-shadow-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
