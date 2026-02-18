"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ContactUsDialog from "../_pages/contact_us/ContactUsDialog";
import Image from "next/image";

const components: { title: string; href: string }[] = [
  {
    title: "Virtual Showrooms",
    href: "/virtual_showroom",
  },
  {
    title: "Virtual Real Estate",
    href: "/virtual_real_estate",
  },
  {
    title: "Virtual Art Gallery",
    href: "/virtual_art_gallery",
  },
];

export function MainNav() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  // Determine if the current route is privacy or terms page
  const isPrivacyOrTermsPage = pathname === "/privacy_and_policy" || pathname === "/terms_of_service";
  return (
    <div
      className={`z-50 w-full transition-all bg-transparent justify-between px-12 hidden md:flex ${
        scrollOffset > 500 ? "py-3" : "py-3"
      } ${!isPrivacyOrTermsPage ? "fixed text-[#CBCBCB] hover:bg-black hover:bg-opacity-30" : "text-[#6C6966]"}`}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              legacyBehavior
              passHref
            >
              {/* <Image
                src="/1clickdesign-logo-black.svg"
                alt=""
                className="cursor-pointer"
              /> */}
              Logo Here
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/services"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={` text-[14px] font-extrabold tracking-wide uppercase`}>
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="uppercase bg-transparent text-[14px] font-extrabold  hover:bg-none  hover:text-white">
              Virtual Experiences
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[200px] ">
                {components.map((component) => (
                  <ListItem
                    className="uppercase text-[#0E2D63]"
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/about"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={` text-[14px] font-extrabold uppercase`}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ContactUsDialog></ContactUsDialog>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-bold leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
