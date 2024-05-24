import React from "react";

type SliderType = {
  bgImg: string;
  title: string;
  description: string;
  videoUrl?: string;
};

const Slider: React.FC<SliderType> = ({
  bgImg,
  title,
  description,
  videoUrl,
}) => {
  if (videoUrl) {
    return (
      <div className="w-screen h-screen p-0 flex justify-center items-center text-white relative">
        <video
          autoPlay
          muted
          loop
          className="-z-10 w-full h-screen object-cover fixed top-0 left-0"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute w-full h-screen top-0 left-0 bg-black opacity-50 "></div>
        <div className="absolute text-center px-4 md:px-20 max-w-[1200px] mx-auto">
          <p className="uppercase text-[14px] md:text-[20px] font-semibold">
            {title}
          </p>
          <p className="text-[24px] md:text-[48px] leading-none">
            {description}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-screen h-screen flex justify-center items-center !bg-fixed text-white"
        style={{ background: `url(${bgImg})` }}
      >
        <div className="absolute text-center px-4 md:px-20 max-w-[1200px] mx-auto">
          <p className="uppercase text-[14px] md:text-[20px] font-semibold">
            {title}
          </p>
          <p className="text-[24px] md:text-[48px] leading-tight md:leading-none">
            {description}
          </p>
        </div>
      </div>
    );
  }
};

export default Slider;
