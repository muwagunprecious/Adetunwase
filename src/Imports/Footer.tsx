"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const linksCol1 = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about-me" },
  { label: "Platforms", href: "#platforms" },
  { label: "Events", href: "#events" },
];

const linksCol2 = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Media & Press", href: "#media-and-press" },
  { label: "Contact", href: "#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white font-light overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 py-30 pb-0">
        {/* ── Main row: logo+nav LEFT  |  heading RIGHT ── */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-6">
          {/* LEFT col — logo + two-col nav */}
          <div className="flex flex-col gap-10 lg:w-[35%] shrink-0">
            <Image
              src="/emmanuelagida_brand_banner.svg"
              alt="Logo"
              width={100}
              height={100}
              draggable={false}
              className="opacity-80 w-90 lg:w-60"
            />

            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-3">
                {linksCol1.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/40 text-xs uppercase hover:text-white/80 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col gap-3">
                {linksCol2.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/40 text-xs hover:text-white/80 uppercase transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT col — ghost display heading flush to right edge */}
          <div className="lg:w-[65%] flex items-start justify-start lg:justify-end lg:-mb-4 lg:-mr-16">
            <h2
              className="font-black tracking-tighter uppercase leading-[0.88] text-white/10 select-none lg:text-right text-left whitespace-nowrap"
              style={{ fontSize: "clamp(52px, 10.5vw, 140px)" }}
            >
              Let&apos;s Build
              <br />
              The Future.
            </h2>
          </div>
        </div>

        {/* ── Contact columns ── */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 border-t border-white/5 mt-14 py-12">
          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] mb-2">
              Direct Line
            </p>
            <Link
              href="tel:1235678901"
              className="text-white/50 text-sm hover:text-white transition-colors duration-300"
            >
              1235678901
            </Link>
          </div>

          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] mb-2">
              Email Support
            </p>
            <Link
              href="mailto:help@emmanuelagida.com"
              className="text-white/50 text-sm hover:text-white transition-colors duration-300 break-all"
            >
              help@emmanuelagida.com
            </Link>
          </div>

          <div>
            <p className="text-white/25 text-[10px] uppercase tracking-[0.18em] mb-2">
              Mission
            </p>
            <p className="text-white/65 cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xs uppercase leading-relaxed">
              Equipping Lives for Purpose,
              <br />
              Leadership, and Impact.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 py-6 flex flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Emmanuel Agida. All Rights Reserved.
          </p>
          <p className="text-white/25 text-xs">
            Built by{" "}
            <Link
              href="https://samfolio-nine.vercel.app"
              target="_blank"
              className="hover:text-white/60 hover:underline cursor-pointer transition-colors duration-300"
            >
              Logical Sam
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
