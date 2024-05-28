import { useMemo } from "react";

export const useFormatCurrency = (amount: number) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };

  return useMemo(() => formatCurrency(amount), [amount]);
};
