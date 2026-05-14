"use client"

import { EngagementProps } from "@/types/engagements";
import Image from "next/image";

const PhotoCard = ({ imageSrc, className }: EngagementProps) => {

  return (
    <Image
      src={imageSrc}
      alt="Engagement Photo"
      width={400}
      height={300}
      className={`h-64 w-auto object-contain transition duration-300 grayscale brightness-70 hover:brightness-100 ${className}`}
    />
  );
}

export default PhotoCard