import HomeSlider from "@/components/_pages/homepage/HomeSlider";
import OurServices from "@/components/_pages/homepage/OurServices";
import PartnersSlider from "@/components/_pages/homepage/PartnersSlider";
import OurVirtualExperiences from "@/components/_pages/homepage/OurVirtualExperiences";
import ProductsWeWorkedWith from "@/components/_pages/homepage/ProductsWeWorkedWith";
import Showrooms from "@/components/_pages/homepage/Showrooms";

import SliderProduct from "@/components/Banner/SliderProduct";
import VideoConferencing from "@/components/_pages/homepage/VideoConferencing";
import ThreeDModels from "@/components/_pages/homepage/ThreeDModels";
import VMC from "@/components/_pages/homepage/VMC";
import OurServicesNew from "@/components/_pages/homepage/OurServicesNew";

export default function Home() {
 return (
  <>
   <HomeSlider></HomeSlider>
   <ProductsWeWorkedWith></ProductsWeWorkedWith>
   <OurServicesNew></OurServicesNew>
   <VideoConferencing></VideoConferencing>
   <SliderProduct
    title="OUR SERVICES"
    description="Producing high-quality 3D models and renderings."
    videoUrl="./homepage/homepage-ourservices.mp4"
   ></SliderProduct>
   <ThreeDModels></ThreeDModels>
   <OurVirtualExperiences></OurVirtualExperiences>
   <Showrooms></Showrooms>
   {/* <PartnersSlider></PartnersSlider> */}
   <VMC></VMC>
  </>
 );
}
