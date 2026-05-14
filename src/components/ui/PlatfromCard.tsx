"use client";

import { useState } from "react";
import { PlatformCardProps } from "@/types/platforms";

const PlatformCard = ({
  title,
  description,
  imageSrc,
  url,
}: PlatformCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div
        className="relative w-full h-80 overflow-hidden cursor-pointer flex flex-col px-4 py-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image layer */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered ?
              "bg-linear-to-br from-black/95 to-primaryGold/90"
            : "bg-linear-to-b from-transparent to-black"
          }`}
        />

        {/* Default Content */}
        <div
          className={`relative z-10 mt-auto transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="text-lg font-bold mt-2 text-white uppercase tracking-tighter">
            {title}
          </h3>
          <p className="text-white/70 text-md font-light leading-tight">{description}</p>
        </div>

        {/* Hover Overlay Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Circular Arrow SVG */}
          <svg
            className={`w-20 h-20 mb-4 transition-transform duration-300 ${
              isHovered ? "scale-100" : "scale-75"
            }`}
            fill="none"
            viewBox="0 0 100 100"
            stroke="var(--primaryGold)"
            strokeWidth="3"
          >
            <circle cx="50" cy="50" r="45" />
            <path
              d="M20 80 L80 20 L45 20 M80 20 L80 55"
              transform="translate(50 50) scale(0.5) translate(-50 -50)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6"
            />
          </svg>

          <p className="text-white/70 text-xl font-normal uppercase tracking-tighter">
            Visit Platform
          </p>
        </div>
      </div>
    </a>
  );
};

export default PlatformCard;
