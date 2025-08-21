import React from "react";
import { buttonProps } from "@/types";
import clsx from "clsx";

const ButtonComponent: React.FC<buttonProps> = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
            "text-white hover:bg-blue-800 focus:ring-4 rounded-2xl font-medium text-sm px-5 py-2 me-2 mb-2 focus:outline-none",
          `${bgColor} hover:${bgColor} font-medium text-sm rounded-2xl px-5 py-2 me-2 mb-2 focus:outline-none`
        )}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonComponent;
