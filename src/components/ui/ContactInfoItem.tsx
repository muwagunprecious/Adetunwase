"use client";

import { useState } from "react";
import { ContactInfoProps } from "@/types/contactInfo";

const ContactInfoItem = ({ itemValue, itemName, iconSrc, url = "" } : ContactInfoProps) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <span className="block rounded-full p-2 sm:p-6 bg-primaryGold w-12 h-12 sm:w-18 sm:h-18 flex items-center justify-center">
        <img src={iconSrc} alt="" className="w-4 sm:w-8" />
      </span>
      <div>
        <h2 className="text-xl sm:text-3xl">{itemName}</h2>
        <a className="text-sm sm:text-lg opacity-70 font-light underline hover:opacity-100" href={url} target="_blank">{itemValue}</a>
      </div>
    </div>
  )
}

export default ContactInfoItem