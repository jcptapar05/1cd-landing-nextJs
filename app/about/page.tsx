import OurVision from "@/components/_pages/about/OurVision";
import OurMission from "@/components/_pages/about/OurMission";
import Slider from "@/components/Banner/Slider";
import WhoWeAre from "@/components/_pages/about/WhoWeAre";
import React from "react";

const AboutPage = () => {
 return (
  <>
   <Slider
    bgImg="./about/about-slider.png"
    title="About us"
    description="Empowering Business Through Technology"
   ></Slider>
   <WhoWeAre></WhoWeAre>
   <OurMission></OurMission>
   <OurVision></OurVision>
  </>
 );
};

export default AboutPage;
