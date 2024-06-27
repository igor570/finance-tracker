import React, { ReactNode, forwardRef } from "react";

export const Select = forwardRef<HTMLSelectElement, { children: ReactNode }>(
  ({ children, ...rest }, ref) => {
    return (
      <select
        ref={ref}
        {...rest}
        className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
