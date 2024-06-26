import { useMemo } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useFormatCurrency } from "@/hooks/useFormatCurrency";

type TrendProps = {
  type: string;
  amount: number;
  prevAmount?: number;
};

const colorClasses = (type: string) => {
  let className: string;
  switch (type) {
    case "Income":
      className = "text-green-700 dark:text-green-300";
      break;
    case "Expense":
      className = "text-red-700 dark:text-red-300";
      break;
    case "Investment":
      className = "text-indigo-700 dark:text-indigo-300";
      break;
    case "Saving":
      className = "text-yellow-700 dark:text-yellow-300";
      break;
    default:
      className = "";
  }
  return className;
};

export const Trend = ({ type, amount, prevAmount }: TrendProps) => {
  const formattedAmount = useFormatCurrency(amount);
  const typeColor = colorClasses(type);

  const calcPercentageDiff = (
    amount: number,
    prevAmount: number | undefined,
  ) => {
    if (amount === undefined || prevAmount === undefined) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  //prevents function re-running if value is the same as last render
  const percentageChange = useMemo(
    () => calcPercentageDiff(amount, prevAmount).toFixed(0),
    [amount, prevAmount],
  );

  return (
    <div>
      <div className={`font-semibold ${typeColor}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {formattedAmount}
      </div>
      <div className="flex space-x-1 items-center text-sm">
        <div>
          {Number(percentageChange) <= 0 && (
            <ArrowDownLeft className={"text-red-700 dark:text-red-300"} />
          )}
        </div>
        <div>
          {Number(percentageChange) > 0 && (
            <ArrowUpRight className={"text-green-700 dark:text-green-300"} />
          )}
        </div>
        <div>{percentageChange}% vs last period</div>
      </div>
    </div>
  );
};
