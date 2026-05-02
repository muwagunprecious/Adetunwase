"use client";

import { IconType } from "react-icons";

interface SocialMediaLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

const SocialMediaLink = ({
  href,
  icon: Icon,
  label,
}: SocialMediaLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-1 flex font-jost items-end justify-center py-8 sm:py-14 gap-2 
      bg-white text-primaryBlack hover:bg-primaryGold transition-all duration-300
      border-x border-gray-100"
    >
      <div className="hidden sm:block text-4xl tracking-tighter transition-all duration-300 group-hover:text-white">
        {label}
      </div>

      <Icon
        size={32}
        className="transition-all duration-300 group-hover:text-white group-hover:scale-110"
      />
    </a>
  );
};

export default SocialMediaLink;
