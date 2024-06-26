import React, { forwardRef, InputHTMLAttributes } from "react";

type classNames = "checkbox" | "default";

// Define the styles for each type
const typeStyles = {
  checkbox:
    "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 shadow-sm",
  default:
    "w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: classNames;
}

// Forward ref to the input element
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        type={type}
        className={typeStyles[className] ?? typeStyles.default}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
