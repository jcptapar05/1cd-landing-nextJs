"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import PickScheduleLiveShowing from "./PickScheduleLiveShowing";

type ShowroomInfo = {
  title?: string;
  url?: string;
  roomtype?: string;
};

const ShowroomRegister: React.FC<ShowroomInfo> = ({ title, url, roomtype }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = url || "";
  };

  const isEmailValid = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isFormValid = (): boolean => {
    return name.trim() !== "" && isEmailValid(email);
  };

  return (
    <div className="w-full h-fit text-[#0E2D63] py-[24px] md:py-10 px-[24px] md:px-10">
      <div className="flex flex-col gap-2">
        <p className="uppercase text-[12px] md:text-[17px] font-bold leading-none">
          {roomtype}
        </p>
        <p className="uppercase text-[24px] md:text-[32px] font-normal leading-none">
          {title}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-1 mt-[24px] md:mt-10">
          <label htmlFor="fname" className="text-[12px] md:text-[18px]">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            required
            className="border-b-[1px] text-[12px] md:text-[18px] border-[#0E2D63] outline-none py-3"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-1 mt-[24px] md:mt-10">
          <label htmlFor="email" className="text-[12px] md:text-[18px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="border-b-[1px] text-[12px] md:text-[18px] border-[#0E2D63] outline-none py-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          disabled={!isFormValid()}
          className={`uppercase w-full py-[18px] md:py-6  mt-[24px] md:mt-8 rounded-3xl font-[#ffffff] bg-[#0E2D63] text-[10px] md:text-[16px] font-extrabold tracking-widest ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Enter Now
        </Button>
      </form>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            disabled={!isFormValid()}
            className="uppercase w-full py-[18px] md:py-6 mt-4 rounded-3xl font-[#ffffff] bg-transparent border-[1px] border-[#0E2D63] text-[#0E2D63] hover:bg-transparent text-[10px] md:text-[16px] font-extrabold tracking-widest"
          >
            Schedule Live Showing
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[800px] max-w-[95%] rounded-2xl md:rounded-lg md:flex p-0 border-none">
          <PickScheduleLiveShowing
            title={title}
            url={url}
            roomtype={roomtype}
            email={email}
            name={name}
          ></PickScheduleLiveShowing>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowroomRegister;
