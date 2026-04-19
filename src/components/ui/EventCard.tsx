"use client";

import { useState } from "react";
import { EventCardProps } from "@/types/events";

const EventCard = ({ title, date, location, imageSrc }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer flex flex-col items-center bg-primaryGold text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 ">
        <p className="">{location}</p>
        <p className="font-bold italic">{date}</p>
      </div>

      {/* Background is image with dark bottom gradient. On hover background turns to primaryGold */}
      <div className="relative w-full h-96 overflow-hidden">

        {/* Background layer */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${imageSrc}), linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isHovered ? 0 : 1
          }}
        />

        {/* Content (always visible) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
          
          <svg viewBox="0 0 100 100" className="w-12 h-12">
            <path
              d="M20 80 L80 20 L45 20 M80 20 L80 55"
              fill="none"
              className="stroke-white opacity-70"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h3 className="text-4xl font-bold mt-2 text-white/70 uppercase tracking-tighter">
            {title}
          </h3>

        </div>
      </div>
    </div>
  );
};

export default EventCard;