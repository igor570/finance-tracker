import { Header } from "../components/Header";
import { Trend } from "@/app/components/Trend";
import { TransactionItem } from "../components/TransactionItem";

const Page = () => {
  return (
    <main className={"space-y-8 "}>
      <h1 className={"text-4xl mt-8"}>Component playground</h1>

      <div>
        <h2 className={"mb-4 text-lg font-mono"}>Header.tsx</h2>
        <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
        <div>
          <Header />
        </div>
      </div>

      <div>
        <h2 className={"mb-4 text-lg font-mono"}>Trend.tsx</h2>
        <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
        <div className={"flex space-x-4"}>
          <Trend type={"Income"} amount={1000} prevAmount={2000} />
        </div>
      </div>

      <div>
        <h2 className={"mb-4 text-lg font-mono"}>TransactionItem.tsx</h2>
        <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
        <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={1000} />
          <TransactionItem
            type="Expense"
            description="Food"
            category="Food"
            amount={50}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
