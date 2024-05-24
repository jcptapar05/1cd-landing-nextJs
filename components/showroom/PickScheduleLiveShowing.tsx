"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import DatePicker from "./DatePicker";
import { DialogClose } from "../ui/dialog";

type ShowroomInfo = {
  title?: string;
  url?: string;
  roomtype?: string;
  name: string;
  email: string;
};

const PickScheduleLiveShowing: React.FC<ShowroomInfo> = ({
  title,
  url,
  roomtype,
  name,
  email,
}) => {
  const [randomDates, setRandomDates] = useState<Date[]>([]);
  const [datePickerDate, setdatePickerDate] = useState<Date>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  useEffect(() => {
    generateRandomDates();
  }, []);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const generateRandomDates = (): void => {
    const today = new Date();
    const minFutureDays = 1;
    const maxFutureDays = 30;

    const newRandomDates = Array.from({ length: 5 }, () => {
      const randomFutureDays = Math.floor(
        Math.random() * (maxFutureDays - minFutureDays + 1) + minFutureDays
      );
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + randomFutureDays);
      return futureDate;
    });

    setRandomDates(newRandomDates);
  };
  const handleDatePickerSelectedDate = (date: Date) => {
    setdatePickerDate(date);
  };
  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date);
  };
  const onSubmit = async () => {
    console.log("test");
    try {
      const response = await fetch("./api/schedule_live_showing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          name: name,
          date: selectedDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-full h-fit text-[#0E2D63] py-[24px] md:py-10 px-[24px] md:px-10">
      <p className="uppercase font-bold text-[12px] md:text-[17px]">
        Pick a schedule for Live Showing
      </p>
      <div className="flex flex-wrap pt-[24px] md:pt-10 gap-2 md:gap-4 w-full">
        {randomDates.map((date, index) => (
          <Button
            key={index}
            onClick={() => {
              handleSelectedDate(date);
            }}
            className={`${
              selectedDate === date
                ? "bg-[#0E2D63] text-white"
                : "bg-transparent text-[#0E2D63]"
            } text-[12px] md:text-[18px] font-medium py-6 px-[15px] md:px-9 w-[132px] md:w-[185px] h-[48px] md:h-[57px] hover:bg-[#0E2D63] hover:text-white border-[#0E2D63] border-[1px] rounded-full`}
          >
            {date.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </Button>
        ))}
      </div>
      <div className="mt-4">
        {datePickerDate && (
          <Button
            onClick={() => {
              handleSelectedDate(datePickerDate);
            }}
            className={`${
              selectedDate === datePickerDate
                ? "bg-[#0E2D63] text-white"
                : "bg-transparent text-[#0E2D63]"
            } text-[12px] md:text-[18px] font-medium py-6 px-[15px] md:px-9 w-[132px] md:w-[185px] h-[48px] md:h-[57px] mr-4 md:mr-8 hover:bg-[#0E2D63] hover:text-white border-[#0E2D63] border-[1px] rounded-full`}
          >
            {datePickerDate?.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </Button>
        )}
        <DatePicker onSelect={handleDatePickerSelectedDate}></DatePicker>
      </div>
      <br className="md:block hidden" />
      <Button
        onClick={onSubmit}
        className={`w-full bg-[#0E2D63] text-[10px] md:text-[16px] text-white rounded-full mt-[40px]  py-[18px] md:py-8 uppercase font-extrabold tracking-widest ${
          !selectedDate ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!selectedDate}
      >
        Schedule
      </Button>
    </div>
  );
};

export default PickScheduleLiveShowing;
