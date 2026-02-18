/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

interface FormData {
  fname: string;
  email: string;
  company: string;
  telnumber: string | undefined;
  message: string;
}

const RequestDemo = () => {
  const [value, setValue] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (formData: any) => {
    console.log("Form Data:", formData);

    const response = await fetch("./api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
      }),
    });
    const dataMessage = await response.json();

    if (response.ok) {
      reset();
      setValue(undefined);
    }
  };
  return (
    <div
      id="requestDemo"
      className="w-full flex flex-col lg:flex-row justify-between px-5 md:px-28 lg:px-38 py-12 md:py-44 gap-5 md:gap-10 bg-white"
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="hidden lg:flex flex-col gap-8 text-[#0E2D63] w-full">
          <p className="uppercase font-extrabold flex items-center gap-4 tracking-wider">
            Request a demo now <span className="gg-arrow-long-right"></span>
          </p>
          <div>
            <h2 className="text-5xl">Ready to turn your Idea</h2>
            <h2 className="text-5xl">
              Into <i className="font-light">Virtual</i> Reality?
            </h2>
          </div>
        </div>
        <div className="flex lg:hidden items-center h-fit flex-col text-[#0E2D63] w-full">
          <p className="uppercase text-[12px]  md:text-base m-0 font-extrabold tracking-widest">Request a demo now</p>
          <div className="text-center ">
            <p className="text-[24px] md:text-[38px]">Ready to turn your Idea</p>
            <p className="text-[24px] md:text-[38px]">
              Into <i className="font-light">Virtual</i> Reality?
            </p>
          </div>
          <Image
            alt="arrow-down"
            width={100}
            height={100}
            src="/arrow-down.png"
            className="py-4"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-[#0E2D63]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col w-full gap-3">
              <label
                htmlFor="fname"
                className="md:text-base text-[12px]"
              >
                First Name
              </label>
              <input
                type="text"
                id="fname"
                {...register("fname")}
                className=" border-b-[1px] border-[#0E2D63] outline-none py-3 md:text-base text-[12px]"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label
                htmlFor="email"
                className="md:text-base text-[12px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                {...register("email")}
                className=" border-b-[1px] border-[#0E2D63] outline-none py-3 md:text-base text-[12px]"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col w-full gap-3">
              <label
                htmlFor="company"
                className="md:text-base text-[12px]"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                required
                {...register("company")}
                className=" border-b-[1px] border-[#0E2D63] outline-none py-3 md:text-base text-[12px]"
                placeholder="Enter company"
              />
            </div>
            <div className="flex flex-col w-full gap-3 bg-r">
              <label
                htmlFor="telnumber"
                className="md:text-base text-[12px]"
              >
                Tel #
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                id="telnumber"
                {...register("telnumber")}
                className=" phoneInput border-b-[1px] flex items-center  gap-4 md:text-base text-[12px] border-[#0E2D63]  outline-none py-3"
                onChange={setValue}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="md:text-base text-[12px]"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              className=" border-b-[1px] border-[#0E2D63] outline-none pt-5 md:text-base text-[12px]"
              placeholder="I would like to"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full md:w-fit self-end rounded-full py-4 md:py-7 bg-[#0E2D63] uppercase font-semibold text-[10px] md:text-[14px] tracking-wide"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
