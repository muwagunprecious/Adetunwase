import React from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  title?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ title, className = "" }) => {
  return (
    <section>
      <div
        className={twMerge(
          "inline-flex tracking-[8px] justify-center items-center py-3 gap-4 text-[10px] font-medium text-white",
          className,
        )}
      >
        <span className="w-20 h-1 bg-primaryGold"></span>
        {title}
      </div>
    </section>
  );
};

export default Badge;
