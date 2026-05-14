"use client";

import { IconType } from "react-icons";

interface SocialMediaLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

const SocialMediaLink = ({ href, icon: Icon, label }: SocialMediaLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-1 flex font-jost items-center justify-center py-8 sm:py-14 gap-3 bg-white text-primaryBlack hover:bg-primaryGold transition-all duration-300
      border-x border-gray-100"
    >
      <Icon
        size={28}
        className="shrink-0 transition-all duration-300 group-hover:text-white group-hover:scale-110"
      />
      <span className="hidden sm:block text-3xl tracking-tighter uppercase leading-none transition-all duration-300 group-hover:text-white">
        {label}
      </span>
    </a>
  );
};

export default SocialMediaLink;
