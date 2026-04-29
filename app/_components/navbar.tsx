"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Founder's", href: "#founders" },
    { label: "Pre & Postnatal Massage", href: "/pre-postnatal-massage" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className={`fixed top-0 w-full text-white z-50 pt-2.5 transition-colors duration-300 ${isScrolled ? "bg-[#212121]" : ""}`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6 h-26">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            className="hidden underline uppercase lg:block text-sm tracking-wide hover:text-accent transition-colors cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="border bg-[#212121] border-none w-fit rounded-none text-white px-3"
          >
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href} className="w-full cursor-pointer">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Image
            src="/logo.webp"
            alt="Mudras Logo"
            width={280}
            height={130}
            className="object-contain"
          />
        </div>
        <Link
          href="/contact"
          className="text-sm tracking-wide hover:text-accent transition-colors"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
