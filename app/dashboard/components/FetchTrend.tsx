import { Trend } from "@/app/components";

export const FetchTrend = async ({ type }: { type: string }) => {
  const response = await fetch(`http://localhost:3100/trends/${type}`);
  const { amount, prevAmount } = await response.json();

  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
};
