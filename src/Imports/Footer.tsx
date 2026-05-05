"use client"

import React from "react";
import Image from "next/image";
import Container from "@/components/layouts/Container";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center bg-black font-light text-base sm:text-xl">
      <Image 
        src="/footer_brand.svg"
        alt="Emmanuel Agida"
        height={40}
        width={40}
        draggable={false}
        className="w-xl sm:my-6 p-4"
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-4 sm:m-8 lg:m-16">
        <div>
          <Image
            src="/emmanuelagida_logo.svg"
            alt="Emmanuel Agida Logo"
            priority
            width={40}
            height={40}
            draggable={false}
            className="w-auto h-auto mb-8"
          />
          <span className="text-white/70">
            Equipping Lives for Purpose, Leadership, and Impact.
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:items-end lg:items-start">
          <span className="text-white/70">
            Quick Links
          </span>
          <a href="/">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#platforms">Platforms</a>
          <a href="#events">Events</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#media-and-press">Media & Press</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white/70">
            Supports
          </span>
          <div>
            <span className="text-white/70">
              Reach me directly?    
            </span> <br />
            <a href="tel:1235678901" className="underline">
              1235678901
            </a>
          </div>
          <div>
            <span className="text-white/70">
              Need support?    
            </span> <br />
            <a href="mailto:help@emmanuelagida.com" className="underline">
              help@emmanuelagida.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:items-end lg:items-start sm:text-end lg:text-start">
          <span className="text-white/70">
            Stay in the Loop.
          </span>
          Get design insights and project updates straight in your inbox.
        </div>
      </div>


      <div className="w-full border-t-1 border-white/30 mt-8 p-8 sm:p-16 text-center text-white/70">
        © Emmanuel Agida. All Rights Reserved. Built by Logical Sam
      </div>
    </footer>
  )
}

export default Footer