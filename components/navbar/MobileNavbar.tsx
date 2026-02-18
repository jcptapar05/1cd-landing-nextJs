import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
import ContactUsDialog from "../_pages/contact_us/ContactUsDialog";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MobileNavbar = () => {
  return (
    <Sheet>
      <div className="w-full flex justify-between px-5 py-2 items-center md:hidden fixed z-50 bg-black bg-opacity-10">
        <Link
          href="/"
          legacyBehavior
          passHref
        >
          <Image
            src="/1clickdesign-logo-black.svg"
            alt=""
            className="cursor-pointer w-[44px] h-auto"
          />
        </Link>
        <SheetTrigger>
          <RiMenu4Fill className="text-white text-[24px] shadow-2xl" />
        </SheetTrigger>
      </div>
      <SheetContent className="min-w-full bg-black bg-opacity-50 border-none !text-white md:hidden">
        <div className="flex justify-center items-center h-[100vh] relative w-full">
          <div className="absolute top-0 left-2">
            <SheetClose asChild>
              <Link href="/">
                <Image
                  src="/1clickdesign-logo-black.svg"
                  alt=""
                  className="cursor-pointer  w-[44px] h-auto"
                />
              </Link>
            </SheetClose>
          </div>
          <div className="flex gap-5 flex-col text-[16px] text-center uppercase font-medium">
            <div>
              <SheetClose asChild>
                <Link
                  className="hover:text-orange-500 cursor-pointer"
                  href="/services"
                >
                  Services
                </Link>
              </SheetClose>
            </div>
            <div className="cursor-pointer">
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
                    <div className="flex flex-col gap-2 font-thin pt-2">
                      <SheetClose asChild>
                        <Link
                          className="hover:text-orange-500 cursor-pointer"
                          href="/virtual_showroom"
                        >
                          Virtual Showroom
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          className="hover:text-orange-500 cursor-pointer"
                          href="/virtual_real_estate"
                        >
                          Virtual Real Estate
                        </Link>
                      </SheetClose>

                      <SheetClose asChild>
                        <Link
                          className="hover:text-orange-500 cursor-pointer"
                          href="/virtual_art_gallery"
                        >
                          Virtual Art Gallery
                        </Link>
                      </SheetClose>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <SheetClose asChild>
                <Link
                  className="hover:text-orange-500 cursor-pointer"
                  href="/about"
                >
                  ABOUT
                </Link>
              </SheetClose>
            </div>
            <div>
              <ContactUsDialog></ContactUsDialog>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
