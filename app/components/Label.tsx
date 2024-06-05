import { ReactNode } from "react";

export const Label = ({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) => {
  return (
    <label
      htmlFor={id}
      className={`text-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </label>
  );
};
