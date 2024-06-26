import { Trend } from "@/app/components";

export const FetchTrend = async ({ type }: { type: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/trends/${type}`,
  );
  const { amount, prevAmount } = await response.json();

  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
};
