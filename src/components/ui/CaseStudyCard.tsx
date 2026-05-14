"use client"

import React, { useState } from "react";
import { CaseStudyProps } from "@/types/caseStudies";
import { ExternalLink } from "lucide-react";

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, description, imageSrc, url, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={url} target="_blank" className={className}>
      <div
        className="relative overflow-hidden cursor-pointer flex flex-col items-center bg-primaryGold text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background is image with dark bottom gradient. On hover background turns to primaryGold */}
        <div className="relative w-full h-80 sm:h-96 lg:h-108 overflow-hidden">
          {/* Background layer */}
          <div
            className="absolute inset-0 transition-opacity duration-300 flex flex-col justify-end p-4 sm:px-8 sm:py-6"
            style={{
              backgroundImage: `url(${imageSrc}), linear-gradient(to bottom, rgba(0, 0, 0, 0.8))`,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: isHovered ? 0 : 1,
            }}
          >
            <div className="text-white/80 text-sm lg:text-lg font-light tracking-tight">
              {description}
            </div>
          </div>

          {/* Content (always visible) */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
            <ExternalLink className="w-8 h-8  text-white/70" />
            <h3 className="text-2xl sm:text-3xl lg:text-xl font-bold mt-2 text-white/70 uppercase tracking-tighter">
              {title}
            </h3>

            <div className="h-16" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default CaseStudyCard