import { ReactNode } from "react";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

type Variant = "default" | "outline" | "ghost";
type Size = "xs" | "sm" | "base" | "lg";

const variants = {
  default:
    "bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-300",
  outline:
    "border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 hover:dark:bg-gray-500",
  ghost:
    "rounded-md bg-white hover:bg-gray-300 dark:bg-black hover:dark:bg-gray-500",
};

const sizes = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  base: "text-base px-4 py-2",
  lg: "text-lg px-4 py-2",
};

export const Button = ({ variant, size, children }: ButtonProps) => {
  const getVariants = variant ? variants[variant] : variants["default"];
  const getSizes = size ? sizes[size] : sizes["base"];

  return <button className={`${getVariants} ${getSizes}`}>{children}</button>;
};
