import { useFormatCurrency } from "@/hooks/useFormatCurrency";

type TransactionItemProps = {
  type?: string;
  category?: string;
  description?: string;
  amount: number;
};

export const TransactionItem = ({
  type,
  category,
  description,
  amount,
}: TransactionItemProps) => {
  const formattedAmount = useFormatCurrency(amount);
  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow">
        <span>{description}</span>
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>
        )}
      </div>
      <div className="min-w-[150px] text-right">{formattedAmount}</div>
      <div className="min-w-[50px] flex ">...</div>
    </div>
  );
};
