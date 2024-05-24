import React from "react";

const ContactUsDetails = () => {
 return (
  <div className="bg-[#0E2D63] p-10 text-white md:w-2/5">
   <div>
    <p className="font-semibold mb-10">Contact Details</p>
    <div>
     <p className="mb-1">Address</p>
     <p>9701 Wilshire Blvd, 10th floor, Beverly Hills, California 90212</p>
    </div>
    <div className="my-8">
     <p className="mb-1">Email</p>
     <a href="mailto:info@1clickdesign.com">info@1clickdesign.com</a>
    </div>
    <div>
     <p className="mb-2">Phone</p>
     <p className="mb-2">
      Office: <span className="underline">310-859-8200</span>
     </p>
     <p>
      Mobile: <span className="underline">310-994-4500</span>
     </p>
    </div>
   </div>
  </div>
 );
};

export default ContactUsDetails;
