"use client";

import { EngagementProps } from "@/types/engagements";
import PhotoCard from "./PhotoCard";

type EngagementsProps = {
  engagements: EngagementProps[];
  direction?: "normal" | "reverse";
};

const PhotoSlider: React.FC<EngagementsProps> = ({
  engagements,
  direction = "normal",
}) => {
  const doubled = [
    ...engagements,
    ...engagements,
    ...engagements,
    ...engagements,
  ];

  return (
    <section className="w-full overflow-hidden relative h-64">
      {/* Sliding track */}
      <div
        className="flex flex-row gap-2 w-max animate-logo-slide"
        style={{ animationDirection: direction }}
      >
        {doubled.map((engagement, index) => (
          <PhotoCard
            key={index}
            imageSrc={engagement.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoSlider;
