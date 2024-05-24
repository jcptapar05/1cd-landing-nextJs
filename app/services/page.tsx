import SliderProduct from "@/components/Banner/SliderProduct";
import OurServices from "@/components/_pages/homepage/OurServices";
import OurServicesNew from "@/components/_pages/homepage/OurServicesNew";
import ThreeDModels from "@/components/_pages/homepage/ThreeDModels";
import VideoConferencing from "@/components/_pages/homepage/VideoConferencing";
import React from "react";

const ServicesPage = () => {
 return (
  <>
   <OurServicesNew></OurServicesNew>
   <VideoConferencing></VideoConferencing>
   <SliderProduct
    title="OUR SERVICES"
    description="Producing high-quality 3D models and renderings."
    videoUrl="./homepage/homepage-ourservices.mp4"
   ></SliderProduct>
   <ThreeDModels></ThreeDModels>
  </>
 );
};

export default ServicesPage;
