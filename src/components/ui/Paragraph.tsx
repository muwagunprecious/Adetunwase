import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: React.ReactNode;
  className: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return (
    <p
      className={twMerge(
        "text-lg text-white sm:text-lg md:text-xl font-jost font-light leading-snug",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
