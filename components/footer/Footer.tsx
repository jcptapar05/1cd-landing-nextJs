"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaSkype, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
export function Footer() {
  const sections = [
    {
      title: "SERVICES",
      links: [
        { text: "Virtual Space Creation", href: "#virtual-space-creation" },
        { text: "3d Modelling & Rendering", href: "#three-d-modelling" },
        { text: "AR & VR Integration", href: "#ar-integration" },
      ],
    },
    {
      title: "VIRTUAL EXPERIENCE",
      links: [
        { text: "Virtual Showroom", href: "/virtual_showroom" },
        { text: "Virtual Real Estate", href: "/virtual_real_estate" },
        { text: "Virtual Art Gallery", href: "/virtual_art_gallery" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "About", href: "/about" },
        { text: "Privacy Policy", href: "/privacy_and_policy" },
        { text: "Terms Of Service", href: "/terms_of_service" },
      ],
    },
  ];
  return (
    <div className="px-8 md:px-20 py-14 justify-between text-[#ffffff] bg-[#0E2D63] flex flex-col lg:flex-row gap-y-8 lg:gap-y-0">
      <div className="w-full  lg:w-8/12 grid grid-flow-row lg:grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center md:items-start"
          >
            <p className="font-extrabold text-[12px] md:text-[16px] mb-4">{section.title}</p>
            <div className="flex flex-col gap-1 items-center md:items-start">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="text-[12px] md:text-[16px] hover:text-[#FFA800]"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-extrabold text-[12px] md:text-[16px] mb-4">CONTACT US</p>
          <div className="flex flex-col items-center  md:items-start gap-2">
            <a
              href="tel:+1 310-859-8200"
              className="text-[12px] md:text-base hover:text-[#FFA800]"
            >
              +1 310-859-8200
            </a>
            <a
              href="mailto:info@1clickdesign.com"
              className="text-[12px] md:text-base hover:text-[#FFA800]"
            >
              info@1clickdesign.com
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/1ClickDesignOfficial/"
                target="_blank"
              >
                <FaFacebook className="hover:text-[#FFA800] cursor-pointer " />
              </a>
              <a
                href="#"
                target="_blank"
              >
                <FaGoogle className="hover:text-[#FFA800] cursor-pointer" />
              </a>
              <a
                href="#"
                target="_blank"
              >
                <FaSkype className="hover:text-[#FFA800] cursor-pointer" />
              </a>
              <a
                href="https://twitter.com/1click_design"
                target="_blank"
              >
                <FaTwitter className="hover:text-[#FFA800] cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col items-center lg:items-end justify-center w-full lg:w-4/12">
        <Image
          src="/1clickdesign-logo.svg"
          alt="logo"
          className="max-w-[60px] md:max-w-[200px]"
        />
        <p className="text-[12px] md:text-[14px] text-center">© 2024 1ClickDesign, LLC. All Rights Reserved.</p>
      </div>
    </div>
  );
}
