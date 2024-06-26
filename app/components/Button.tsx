import { ReactNode } from "react";
import { variants } from "@/lib/variants";
import { sizes } from "@/lib/variants";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
};

type Variant = "default" | "outline" | "ghost";
type Size = "xs" | "sm" | "base" | "lg";

export const Button = ({
  variant,
  size,
  children,
  onClick,
  isDisabled,
}: ButtonProps) => {
  const getVariants = variant ? variants[variant] : variants["default"];
  const getSizes = size ? sizes[size] : sizes["base"];

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${getVariants} ${getSizes}`}
    >
      {children}
    </button>
  );
};
