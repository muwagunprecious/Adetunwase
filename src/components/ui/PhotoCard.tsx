import { EngagementProps } from "@/types/engagements";
import Image from "next/image";

const PhotoCard = ({ imageSrc, className }: EngagementProps) => {
  return (
    <Image
      src={imageSrc}
      alt="Slum Art children taking part in a community art workshop"
      width={400}
      height={300}
      className={`h-64 w-auto shrink-0 object-cover transition duration-300 hover:scale-[1.02] ${className ?? ""}`}
    />
  );
};

export default PhotoCard;
