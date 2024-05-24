import React from "react";

const VideoConferencing = () => {
  return (
    <div className="w-full h-fit md:h-screen flex items-center justify-center px-0 md:px-20 py-0 md:py-10 bg-[#0E2D63]">
      <div className="relative hidden md:block w-auto h-full overflow-hidden rounded-3xl">
        <video
          className="-z-10 top-0 left-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./homepage/videoconferencing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex gap-12 flex-col justify-center items-start">
          <div className="flex flex-col ml-16 gap-4 text-start text-white">
            <p className="uppercase font-bold text-[20px] m-0 p-0 leading-[0.8] ">
              OUR SERVICES
            </p>
            <p className="text-[48px] m-0 p-0 leading-[0.8] ">
              Ensure seamless collaboration with
            </p>
            <p className="text-[48px] m-0 p-0 leading-[0.8] ">
              our live video conferencing
            </p>
          </div>
        </div>
      </div>
      <div className=" block md:hidden w-full h-fit  overflow-hidden">
        <video
          className="-z-10 w-full h-auto object-contain"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./homepage/videoconferencing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-full h-full flex gap-12 flex-col px-4 py-14">
          <div className="flex flex-col gap-4 text-start text-white">
            <p className="uppercase font-bold text-[14px] leading-[0.8] ">
              OUR SERVICES
            </p>
            <p className="text-[24px] leading-[0.8] ">Ensure seamless</p>
            <p className="text-[24px] leading-[0.8] ">
              collaboration with our live
            </p>
            <p className="text-[24px] leading-[0.8]">video conferencing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConferencing;
