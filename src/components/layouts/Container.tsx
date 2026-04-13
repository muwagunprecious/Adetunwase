import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={twMerge(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-6`, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
