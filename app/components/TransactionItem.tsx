import { useFormatCurrency } from "@/hooks/useFormatCurrency";
import { HandCoins, Wallet, PiggyBank, Landmark } from "lucide-react";

type TransactionItemProps = {
  type: TypeKey;
  category?: string;
  description?: string;
  amount: number;
};

type TypeKey = "Income" | "Expense" | "Saving" | "Investment";
type TypeProps = { icon: React.ComponentType; colors: string };

const typesMap: Record<TypeKey, TypeProps> = {
  Income: {
    icon: HandCoins,
    colors: "text-green-500 dark:text-green-400",
  },
  Expense: {
    icon: Wallet,
    colors: "text-red-500 dark:text-red-400",
  },
  Saving: {
    icon: PiggyBank,
    colors: "text-indigo-500 dark:text-indigo-400",
  },
  Investment: {
    icon: Landmark,
    colors: "text-yellow-500 dark:text-yellow-400",
  },
};

export const TransactionItem = ({
  type,
  category,
  description,
  amount,
}: TransactionItemProps) => {
  const IconComponent = typesMap[type].icon;
  const iconColour = typesMap[type].colors;
  const formattedAmount = useFormatCurrency(amount);

  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow space-x-2">
        <div className={`${iconColour} hidden sm:block`}>
          <IconComponent />
        </div>
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
