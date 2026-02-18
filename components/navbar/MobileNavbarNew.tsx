/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactUsDialog from "../_pages/contact_us/ContactUsDialog";
import { Button } from "../ui/button";
import Image from "next/image";

const MobileNavbarNew = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log(isNavOpen);
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="h-20 bg-black bg-opacity-10 flex md:hidden fixed w-screen border-none z-50">
      <div className="flex justify-between py-5 px-5">
        <Link
          href="/"
          legacyBehavior
          passHref
        >
          <Image
            src="/1clickdesign-logo.svg"
            alt=""
            className="cursor-pointer w-[44px]"
          />
        </Link>
        <div
          className="hamburger"
          onClick={toggleNav}
        >
          {/* {isNavOpen ? (
      <MdOutlineClose className="text-white text-[24px] shadow-2xl" />
     ) : (
      <RiMenu4Fill className="text-white text-[24px] shadow-2xl" />
     )} */}
          <RiMenu4Fill className="text-white text-[24px] shadow-2xl" />
        </div>
      </div>
      <div className={`nav-links h-screen relative text-white ${isNavOpen ? "open z-[999] block" : "invisible"}`}>
        <div className="flex justify-between items-center pt-6 px-5">
          <Link
            href="/"
            legacyBehavior
            passHref
            className=""
          >
            <Image
              src="/1clickdesign-logo.svg"
              alt=""
              className="cursor-pointer w-[44px]"
            />
          </Link>
          <button onClick={toggleNav}>
            <MdOutlineClose size={26} />
          </button>
        </div>
        <ul className={`flex flex-col h-screen justify-center items-center gap-10`}>
          <li className={`${isNavOpen && "fade"}`}>
            <Link
              className="hover:text-orange-500 cursor-pointer text-[20px]"
              href="/services"
              onClick={toggleNav}
            >
              Services
            </Link>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                className="border-none"
                value="item-1"
              >
                <AccordionTrigger className="flex flex-col gap-1 py-0 uppercase hover:no-underline hover:text-orange-500 cursor-pointer">
                  Virtual Experiences
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-center gap-2 font-medium text-[16px] pt-2">
                    <Link
                      className="hover:text-orange-500 cursor-pointer "
                      href="/virtual_showroom"
                      onClick={toggleNav}
                    >
                      Virtual Showroom
                    </Link>

                    <Link
                      className="hover:text-orange-500 cursor-pointer "
                      href="/virtual_real_estate"
                      onClick={toggleNav}
                    >
                      Virtual Real Estate
                    </Link>

                    <Link
                      className="hover:text-orange-500 cursor-pointer "
                      href="/virtual_art_gallery"
                      onClick={toggleNav}
                    >
                      Virtual Art Gallery
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <Link
              className="hover:text-orange-500 cursor-pointer"
              href="/about"
              onClick={toggleNav}
            >
              ABOUT
            </Link>
          </li>
          <li className={`${isNavOpen && "fade"}`}>
            <Link
              href="/contact_us"
              onClick={toggleNav}
              className={`text-[#0E2D63] bg-white py-3 shadow-lg px-5 rounded-full text-[11px] font-extrabold uppercase hover:bg-white`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbarNew;
