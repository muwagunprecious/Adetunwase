"use client";

import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

const logos: Logo[] = [
  { src: "/logos/logo_1.svg", alt: "Logo 1" },
  { src: "/logos/logo_2.svg", alt: "Logo 2" },
  { src: "/logos/logo_3.svg", alt: "Logo 3" },
  { src: "/logos/logo_4.svg", alt: "Logo 4" },
  { src: "/logos/logo_5.svg", alt: "Logo 5" },
  { src: "/logos/logo_6.svg", alt: "Logo 6" },
];

const LogoSlider = () => {
  // Duplicate logos for seamless infinite loop
  const doubled = [...logos, ...logos];

  return (
    <section className="w-full bg-black py-12 mt-20 overflow-hidden relative">
      {/* Left fade overlay */}
      <div
        className="absolute left-0 top-0 h-full w-50 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #000000 0%, transparent 100%)",
        }}
      />

      {/* Right fade overlay */}
      <div
        className="absolute right-0 top-0 h-full w-50 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #000000 0%, transparent 100%)",
        }}
      />

      {/* Sliding track */}
      <div className="flex w-max animate-logo-slide">
        {doubled.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-10 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={48}
              className="h-10 w-auto object-contain hover:duration-300 hover:transition-all hover:shadow-primaryGold hover:-translate-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
