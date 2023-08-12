import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  filled?: boolean;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  filled = true,
  href = "", 
  target="",
}) => {
  return (
    <a href={href} target={target}>
      <button
        className={
          "cursor-pointer w-fit px-6 py-3 rounded-xl" +
          (filled
            ? " bg-white text-raisin_black font-bold"
            : " text-white border-2 border-white")
        }
      >
        {children}
      </button>
    </a>
  );
};
