import React from "react";
import { buttonProps } from "@/types";
import clsx from "clsx";
function buttonComponent({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
            "text-white hover:bg-blue-800 focus:ring-4 font-medium text-sm px-5 py-2 me-2 mb-2 focus:outline-none",
          `${bgColor} hover:${bgColor} font-medium text-sm px-5 py-2 me-2 mb-2 focus:outline-none`
        )}
      >
        {text}
      </button>
    </div>
  );
}

export default buttonComponent;
