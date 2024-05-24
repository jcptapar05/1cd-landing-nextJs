"use client";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-white fixed z-[9999] w-screen h-screen flex justify-center items-center">
      <Image src="/loading.gif" alt="" width={100} height={100} />
    </div>
  );
};

export default Loading;
