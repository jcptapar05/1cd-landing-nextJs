import React from "react";

const ThreeDModels = () => {
  return (
    <div
      id="three-d-modelling"
      className="py-10 px-5 md:px-8 lg:px-16 mb-0 flex items-center bg-white justify-center"
    >
      <div className="flex flex-col w-full h-full">
        <div className="w-full flex flex-col md:flex-row mb-5">
          <video
            className="w-full md:w-1/3 md:h-[600px] object-cover  aspect-square md:aspect-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="./homepage/threedmodels/chair-brown.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            className="w-full md:w-2/3 md:h-[600px] object-cover mt-5 md:mt-0 md:ps-5  aspect-square md:aspect-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./homepage/threedmodels/sofa.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <video
            className="w-full h-auto md:w-2/3 md:h-[900px] object-cover aspect-square md:aspect-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./homepage/threedmodels/bbq.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col gap-y-5 w-full h-fit md:h-[900px] ">
            <video
              className="w-full h-auto md:h-1/2 object-cover aspect-square md:aspect-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="./homepage/threedmodels/wok.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-full h-auto md:h-1/2 object-cover aspect-square md:aspect-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="./homepage/threedmodels/bowl.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="./homepage/threedmodels/chair-brown.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
    </div>
  );
};

export default ThreeDModels;
