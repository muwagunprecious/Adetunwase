"use client";

import { useState } from "react";
import { MediaCardProps } from "@/types/media";

const MediaCard = ({ title, description, imageSrc, url, style }: MediaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={style}>
      <div
        className="relative w-full h-full overflow-hidden cursor-pointer flex flex-col px-5 py-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image layer */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered
              ? "bg-black/80"
              : "bg-black/60"
          }`}
        />

        {/* Default Content */}
        <div
          className={`relative z-10 mt-auto transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="text-2xl font-semibold mt-2 text-white/80">
            {title}
          </h3>
          <p className="text-white/70 text-lg leading-tight">
            {description}
          </p>
        </div>

        {/* Hover Overlay Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-primaryGold text-md tracking-tighter px-10 py-4 border-primaryGold border-2">
            View Publication
          </p>
        </div>
      </div>
    </a>
  )
};

export default MediaCard;