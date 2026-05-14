"use client";

// import { useState } from "react";
import { ContactInfoProps } from "@/types/contactInfo";
import Image from "next/image";

const ContactInfoItem = ({ itemValue, itemName, iconSrc, url = "" } : ContactInfoProps) => {
  return (
    <div className="flex flex-row items-center gap-3 lg:gap-6">
      <span className="rounded-full bg-primaryGold size-8 sm:size-12 flex items-center justify-center shrink-0">
        <Image
          src={iconSrc}
          alt=""
          width={20}
          height={20}
          className="w-3 h-3 sm:w-5 sm:h-5"
        />
      </span>
      <div>
        <h2 className="text-md sm:text-lg uppercase">{itemName}</h2>
        <a
          className="text-sm sm:text-md transition-all duration-300 hover:translate-x-2 opacity-70 font-light underline hover:opacity-100"
          href={url}
          target="_blank"
        >
          {itemValue}
        </a>
      </div>
    </div>
  );
}

export default ContactInfoItem
