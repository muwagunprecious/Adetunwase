"use client";

import { useState } from "react";

type ButtonProps = {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  primaryText: string;
  variant?: "gold" | "black" | "none";
  hoverText?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  icon: Icon,
  primaryText,
  variant = "gold",
  hoverText,
  iconPosition = "left",
  onClick,
  className = "",
  title = "",
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    gold: "bg-primaryGold hover:bg-primaryRed/90 active:bg-primaryGold/70",
    black: "bg-primaryBlack hover:bg-primaryBlack/90 active:bg-primaryBlack/70",
    none: "bg-none hover:underline active:bg-transparent",
  };

  return (
    <button
      type="button"
      aria-label={
        props["aria-label"] ??
        (isHovered ? (hoverText ?? primaryText) : primaryText)
      }
      aria-disabled={props.disabled}
      className={`
        ${variantStyles[variant]} ${title}
        inline-flex font-jost justify-center items-center px-6 py-3 h-12
        cursor-pointer text-white font-medium text-xs
        transition-all duration-300 ease-out hover:-translate-y-0.5
        focus:outline-none relative overflow-hidden
        ${iconPosition === "right" ? "flex-row-reverse gap-2" : "gap-2"}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Static Icon */}
      {Icon && <Icon size={20} className="hrink-0 relative z-10" />}

      {/* Rolling Text Container */}
      <div className="relative overflow-hidden h-12" aria-live="polite">
        <div
          className={`
            transition-transform duration-500 ease-out
            ${isHovered ? "-translate-y-12" : "translate-y-0"}
          `}
        >
          {/* Primary Text */}
          <div
            className="h-12 flex items-center justify-center whitespace-nowrap"
            aria-hidden={!!hoverText && isHovered}
          >
            {primaryText}
          </div>

          {/* Hover Text */}
          <div
            className="h-12 flex items-center justify-center whitespace-nowrap"
            aria-hidden={!isHovered}
          >
            {hoverText}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Button;
