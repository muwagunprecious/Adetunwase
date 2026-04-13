import React from "react";

interface BadgeProps {
  title?: string;
}

const Badge: React.FC<BadgeProps> = ({ title }) => {
  return (
    <section>
      <div className="inline-flex tracking-[8px] justify-center items-center py-3 gap-4 text-[10px] font-medium text-white">
        <span className="w-20 h-1 bg-primaryGold"></span>
        {title}
      </div>
    </section>
  );
};

export default Badge;
