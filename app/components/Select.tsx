import React, { ReactNode, forwardRef } from "react";

export const Select = forwardRef<HTMLSelectElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <select
        ref={ref}
        className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 "
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
