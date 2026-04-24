"use client";

import { useState } from "react";
import { ContactInfoProps } from "@/types/contactInfo";

const ContactInfoItem = ({ itemValue, itemName, iconSrc, url = "" } : ContactInfoProps) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <span className="block rounded-full p-6 bg-primaryGold w-18 h-18">
        <img src={iconSrc} alt="" />
      </span>
      <div>
        <h2 className="text-3xl">{itemName}</h2>
        <a className="text-lg opacity-70 font-light underline hover:opacity-100" href={url} target="_blank">{itemValue}</a>
      </div>
    </div>
  )
}

export default ContactInfoItem