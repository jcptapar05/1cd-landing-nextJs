import React from "react";
import ContactUsDialog from "../_pages/contact_us/ContactUsDialog";
import ShowroomDialog from "./ShowroomDialog";

type ShowroomType = {
  bgImg?: string;
  title: string;
  url: string;
  roomtype: string;
  videoUrl?: string;
  design?: string;
};

const ShowroomCards: React.FC<ShowroomType> = ({
  bgImg,
  title,
  url,
  design,
  roomtype,
}) => {
  return (
    <div
      className={`w-full text-center flex items-center justify-center text-white rounded-lg ${design}`}
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div>
        <p className="pb-0 mb-0 text-[14px] md:text-base font-semibold uppercase">
          {roomtype}
        </p>
        <h3 className="text-[32px] md:text-[48px] mb-4 leading-tight">
          {title}
        </h3>
        <ShowroomDialog
          title={title}
          url={url}
          roomtype={roomtype}
        ></ShowroomDialog>
      </div>
    </div>
  );
};

export default ShowroomCards;
