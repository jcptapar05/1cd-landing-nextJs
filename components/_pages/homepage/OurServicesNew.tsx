/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);

const data = [
  {
    title: "Our Services",
    description: "Crafting customized virtual experiences tailored to your needs.",
    video: true,
    src: "./homepage/homepage-ourserviceslide1.mp4",
  },
  {
    title: "Our Services",
    description: "Designing fully interactive virtual environments.",
    video: false,
    src: "./homepage/homepage-ourserviceslide2.png",
  },
  {
    title: "Our Services",
    description: "Integrated VR and AR technology for an immersive experience.",
    video: false,
    src: "./homepage/homepage-ourserviceslide3.png",
  },
];

const OurServicesNew = () => {
  return (
    <>
      <div className="h-[65vh] md:h-screen w-full bg-[#0E2D63] hidden md:flex">
        <div className="w-full h-full">
          <Swiper
            id="SwiperNext"
            className="h-full"
            modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
            spaceBetween={50}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            slidesPerView={1}
            direction="vertical"
          >
            <SwiperSlide>
              <div className="w-full md:flex text-white">
                <div className="w-full md:w-1/2 h-[300px] md:h-screen object-cover">
                  <video
                    autoPlay
                    loop
                    muted
                    id="virtual-space-creation"
                    className="w-full h-full object-cover"
                    playsInline
                  >
                    <source
                      src="./homepage/homepage-ourserviceslide1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="w-full md:w-1/2 h-[300px] md:h-screen flex flex-col justify-center items-center px-4 md:px-20">
                  <div>
                    <h6 className="font-bold text-[16px] md:text-[20px] uppercase">Our Services</h6>
                    <p className="text-[24px] md:text-[48px]">
                      Crafting customized virtual experiences tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full md:flex text-white">
                <div className="w-full md:w-1/2 h-[300px] md:h-screen object-cover">
                  <Image
                    src="./homepage/homepage-ourserviceslide2.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 h-[300px] md:h-screen flex flex-col justify-center items-center px-4 md:px-20">
                  <div>
                    <h6 className="font-bold text-[16px] md:text-[20px] uppercase">Our Services</h6>
                    <p className="text-[24px] md:text-[48px]">Designing fully interactive virtual environments.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full md:flex text-white">
                <div className="w-full md:w-1/2 h-[300px] md:h-screen object-cover">
                  <Image
                    src="./homepage/homepage-ourserviceslide3.png"
                    alt=""
                    id="ar-integration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 h-[300px] md:h-screen flex flex-col justify-center items-center px-4 md:px-20">
                  <div>
                    <h6 className="font-bold text-[16px] md:text-[20px] uppercase">Our Services</h6>
                    <p className="text-[24px] md:text-[48px]">
                      Integrated VR and AR technology for an immersive experience.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex md:hidden bg-[#0E2D63]">
        <div className="w-full md:flex text-white">
          {data.map((item, index) => (
            <div key={index}>
              <div className="w-full h-[300px] object-cover">
                {item.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    id="virtual-space-creation"
                    className="w-full h-full object-cover"
                    playsInline
                  >
                    <source
                      src={item.src}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <div className="w-full md:w-1/2 h-[300px] md:h-screen object-cover">
                    <Image
                      src={item.src}
                      alt=""
                      id="ar-integration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="w-full py-20 md:h-screen flex flex-col justify-center items-center px-4">
                <div>
                  <h6 className="font-bold text-[14px] md:text-[20px] uppercase">{item.title}</h6>
                  <p className="text-[24px] md:text-[48px]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServicesNew;
