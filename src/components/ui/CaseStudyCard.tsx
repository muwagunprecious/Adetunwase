"use client"

import React, { useState } from "react";
import { CaseStudyProps } from "@/types/caseStudies";

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
              backgroundImage: `url(${imageSrc}), linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))`,
              backgroundBlendMode: 'overlay',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isHovered ? 0 : 1
            }}
          >
            <div className="text-white/80 text-sm sm:text-lg lg:text-xl font-light">
              {description}
            </div>
          </div>

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

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white/70 uppercase tracking-tighter">
              {title}
            </h3>

            <div className="h-16" />

          </div>
        </div>
      </div>
    </a>
  )
}

export default CaseStudyCard