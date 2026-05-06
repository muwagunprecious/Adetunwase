"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about-me" },
  { label: "Platforms", href: "#platforms" },
  { label: "Events", href: "#events" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Media & Press", href: "#media-and-press" },
  { label: "Contact", href: "#contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white font-light">
      <div className="max-w-7xl mx-auto px-6 lg:py-16 py-10">
        {/* Top branding */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <Image
            src="/footer_brand.svg"
            alt="Brand"
            width={100}
            height={100}
            draggable={false}
            className="opacity-90 w-90"
          />

          <p className="text-white/60 text-center max-w-md">
            Equipping Lives for Purpose, Leadership, and Impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/emmanuelagida_logo.svg"
              alt="Logo"
              width={40}
              height={40}
              draggable={false}
            />
            <p className="text-white/60 leading-relaxed">
              Building systems, platforms, and people for long-term impact.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-white/70 mb-4">Quick Links</h4>

            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/60 hover:underline hover:text-white transition-all duration-300 hover:translate-x-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-white/70 mb-4">Support</h4>

            <div className="text-white/60 space-y-1">
              <p>Reach me directly</p>
              <Link
                href="tel:1235678901"
                className="hover:text-white hover:underline transition hover:translate-x-2 inline-block duration-300"
              >
                1235678901
              </Link>
            </div>

            <div className="text-white/60 space-y-1">
              <p>Need support?</p>
              <Link
                href="mailto:help@emmanuelagida.com"
                className="hover:text-white hover:underline transition hover:translate-x-2 inline-block duration-300"
              >
                help@emmanuelagida.com
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white/70 mb-4">Stay in the Loop</h4>

            <p className="text-white/60">
              Get insights, updates, and project drops directly in your inbox.
            </p>

            <div className="mt-4 border border-white/20 rounded-lg p-3 text-white/40 text-sm">
              Coming soon...
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Emmanuel Agida. All Rights Reserved.
          Built by{" "}
          <Link
            href="https://samfolio-nine.vercel.app"
            target="_blank"
            className="hover:text-white transition duration-300"
          >
            Logical Sam
          </Link>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
