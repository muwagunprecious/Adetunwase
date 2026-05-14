"use client";

import { useState } from "react";
import { EventCardProps } from "@/types/events";
import { ExternalLink } from "lucide-react";

const EventCard = ({
  title,
  date,
  location,
  imageSrc,
  url,
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="h-80">
      <div
        className="relative overflow-hidden cursor-pointer flex flex-col bg-primaryGold text-white h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top info — fixed height */}
        <div className="p-6 shrink-0 items-center">
          <p className="text-sm">{location}</p>
          <p className="font-bold italic">{date}</p>
        </div>

        {/* Image section — grows to fill remaining card height */}
        <div className="relative w-full flex-1 overflow-hidden">
          {/* Background layer */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${imageSrc}), linear-gradient(to bottom, rgba(0, 0, 0, 0.8))`,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isHovered ? 0 : 1,
            }}
          />

          {/* Content (always visible) */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-0 text-center">
            <ExternalLink className="w-8 h-8 text-white/70" />
            <h3 className="text-xl font-bold mt-2 text-white/70 uppercase tracking-tighter">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
