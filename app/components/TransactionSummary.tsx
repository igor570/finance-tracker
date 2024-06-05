import { useFormatCurrency } from "@/hooks/useFormatCurrency";

type TransactionSummaryProps = {
  date: number;
  amount: number;
};

export const TransactionSummary = ({
  date,
  amount,
}: TransactionSummaryProps) => {
  const formattedAmount = useFormatCurrency(amount);
  return (
    <div className="flex text-gray-500 dark:text-gray-400 font-semibold">
      <div className="grow">{date}</div>

      <div className="min-w-[70px] text-right font-semibold">
        {formattedAmount}
      </div>
      <div className="min-w-[50px] flex justify-end">...</div>
    </div>
  );
};
