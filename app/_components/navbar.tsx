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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Founder's", href: "/founders" },
    { label: "Pre & Postnatal Massage", href: "/pre-postnatal-massage" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full text-white z-50 pt-2.5 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "bg-[#212121]" : ""}`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 lg:py-6 h-20 lg:h-26">
          {/* Desktop Menu */}
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

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 -ml-2 text-white"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <Image
              src="/logo.webp"
              alt="Mudras Logo"
              width={280}
              height={130}
              className="object-contain w-[160px] sm:w-[200px] lg:w-[280px] h-auto"
            />
          </div>

          <Link
            href="/contact"
            className="text-xs sm:text-sm tracking-wide hover:text-accent transition-colors uppercase"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#212121] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end px-4 sm:px-6 py-4 h-20">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 -mr-2 text-white"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-7 px-6 pt-8 pb-16 h-[calc(100vh-5rem)] overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-light uppercase tracking-wide hover:text-[#f0cc75] transition-colors text-center"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 text-sm font-medium tracking-wide transition-colors"
          >
            Book Your Session
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
