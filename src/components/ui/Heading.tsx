import React from "react";
import { twMerge } from "tailwind-merge";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: HeadingTag;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  as: Tag = "h1",
  ...props
}) => {
  return (
    <Tag
      className={twMerge(
        "font-bold text-white text-2xl sm:text-5xl md:text-7xl lg:text-5xl uppercase sm:leading-tight tracking-tighter leading-tight font-jost",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
