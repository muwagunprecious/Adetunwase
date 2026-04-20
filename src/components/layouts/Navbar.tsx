"use client";

import { useState, useEffect } from "react";
import { NavLinks } from "@/constants/navbar";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { CircleArrowOutUpRight, CircleX, Menu, X } from "lucide-react";

const Navbar = () => {
  // const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = (): void => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsScrolled(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setIsScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle "Get in Touch" button click and scroll to the "Contact" section
  const handleLinkClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        className={`fixed left-0 w-full z-50 transition-all bg-black duration-300 ease-in-out ${
          isScrolled ?
            "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Brand banner */}
        <div className="bg-black w-full">
          <Image
            src="/emmanuelagida_brand_banner.svg"
            alt="Emmanuel Agida Brand Banner"
            priority
            draggable={false}
            width={80}
            height={80}
            className="lg:w-auto lg:h-auto w-80 flex mx-auto"
          />
        </div>

        {/* Desktop & Tablet Navbar */}
        <nav className="bg-primaryBlack font-primaryFont hidden justify-between items-center px-4 py-6 sm:px-6 lg:px-6 w-full lg:flex">
          {/* Brand logo */}
          <Link
            href="/"
            className="font-black tracking-tighter text-base flex items-center justify-center gap-2"
          >
            <Image
              src="/emmanuelagida_logo.svg"
              alt="Emmanuel Agida Logo"
              priority
              width={40}
              height={40}
              draggable={false}
              className="w-auto h-auto"
            />
          </Link>

          {/* Desktop navlinks */}
          <div className="flex justify-between items-center gap-10">
            {NavLinks.map(link => {
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className="mx-2 font-normal text-white/60 hover:text-primaryGold py-3 text-xs relative transition-all duration-300 ease-out group"
                >
                  <span>{link.label}</span>

                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primaryGold group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              );
            })}
          </div>

          {/* Desktop button */}
          <Button
            title="get in touch"
            primaryText="GET IN TOUCH"
            hoverText="GET IN TOUCH"
            icon={CircleArrowOutUpRight}
            iconPosition="left"
            onClick={handleLinkClick}
            className="gap-2"
            aria-label="Get in touch button"
          />
        </nav>

        {/* Mobile Navbar */}
        <nav className="bg-primaryBlack w-full px-4 py-6 flex justify-between items-center md:hidden">
          {/* Mobile Brand logo */}
          <Link
            href="/"
            className="font-black tracking-tighter text-base flex items-center justify-center gap-2"
            onClick={handleLinkClick}
          >
            <Image
              src="/emmanuelagida_logo.svg"
              alt="Emmanuel Agida Logo"
              priority
              width={100}
              height={100}
              className="lg:w-auto lg:h-auto w-14"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 cursor-pointer rounded-lg text-primaryGold hover:bg-primaryGold/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ?
              <CircleX className="w-8 h-8" />
            : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black backdrop-blur-sm
          transition-opacity duration-300 ease-in-out
          md:hidden
          ${
            isMobileMenuOpen ?
              "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <main
        className={`
          fixed top-0 h-screen w-full z-50
          bg-primaryGold transform transition-transform duration-300 ease-in-out
          md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-8 border-b border-white/20">
          <button
            onClick={toggleMobileMenu}
            className="p-2 cursor-pointer rounded-lg text-primaryWhite hover:bg-white/10 transition-colors duration-200"
            aria-label="Close mobile menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile navigation links */}
        <nav className="flex flex-col space-y-3">
          {NavLinks.map(link => {
            return (
              <Link
                href={link.href}
                key={link.label}
                onClick={handleLinkClick}
                className={`
                  py-5 px-8 text-base text-white/70 transition-all duration-200 ease-out border-b border-b-white/20
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </main>
    </div>
  );
};

export default Navbar;
