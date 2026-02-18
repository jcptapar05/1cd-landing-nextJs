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

const OurServices = () => {
  const swiperRef = useRef<any | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [isAtTop, setIsAtTop] = useState(false);
  const myElementRef = useRef<any>(null);

  const handleScroll = (e: WheelEvent) => {
    const deltaY = e.deltaY;
    const totalSlides = swiperRef.current?.slides.length || 0;

    if (myElementRef.current) {
      const rect = myElementRef.current.getBoundingClientRect();
      setIsAtTop(rect.top <= 0);

      if (rect.top <= 0) {
        if (deltaY > 0 && currentSlide === totalSlides - 1) {
          // Scrolling down on the last slide, go to the next section
          // You can add logic to navigate to the next section here
          console.log("Scrolling to the next section");
        } else {
          // Normal scrolling behavior within the swiper
          swiperRef.current?.slideTo(currentSlide + (deltaY > 0 ? 1 : -1));
        }
      }
    }
  };

  const updateCurrentSlide = () => {
    setCurrentSlide(swiperRef.current?.activeIndex || 0);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSlide]);

  const renderParagraph = () => {
    switch (currentSlide) {
      case 0:
        return (
          <>
            <p className="text-[48px]">Crafting customized virtual experiences tailored to your needs.</p>
          </>
        );
      case 1:
        return (
          <>
            <p className="text-[48px]">Designing fully interactive virtual environments.</p>
          </>
        );
      case 2:
        return (
          <>
            <p className="text-[48px]">Integrated VR and AR technology for an immersive experience.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="h-screen w-full flex bg-[#0E2D63]"
      ref={myElementRef}
    >
      <div className="w-1/2 h-full">
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
          loop={false}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          direction="vertical"
          scrollbar={{ el: ".swiper-scrollbar", hide: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateCurrentSlide();
          }}
          onSlideChange={updateCurrentSlide}
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="./homepage/homepage-ourserviceslide2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="./homepage/homepage-ourserviceslide3.png"
              alt=""
              id="ar-integration"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className={`w-1/2 h-full flex-col p-10 cursor-pointer flex justify-center text-white `}
        style={{
          top: 0,
          bottom: 0,
          right: 0,
          overflowY: "auto",
        }}
      >
        <h6 className="font-bold text-[24px] uppercase">Our Services</h6>
        {renderParagraph()}
      </div>
    </div>
  );
};

export default OurServices;
