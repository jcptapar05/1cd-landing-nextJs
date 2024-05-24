import ContactUsDetails from "@/components/_pages/contact_us/ContactUsDetails";
import ContactUsForm from "@/components/_pages/contact_us/ContactUsForm";
import React from "react";

const page = () => {
 return (
  <div className="md:flex p-0 pt-28 bg-[#0E2D63]">
   <ContactUsDetails></ContactUsDetails>
   <ContactUsForm></ContactUsForm>
  </div>
 );
};

export default page;
