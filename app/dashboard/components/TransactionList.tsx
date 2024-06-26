import { TransactionItem, TransactionSummary } from "@/app/components";
import { Seperator } from "@/app/components";

type Transaction = {
  id: number;
  amount: number;
  type: "Income" | "Expense" | "Saving" | "Investment";
  description: string;
  category: string;
  created_at: string;
};

type GroupedTransactions = {
  [date: string]: {
    transactions: Transaction[];
    amount: number;
  };
};

const groupTransactionsByDate = (transactions: Transaction[]) => {
  const grouped: GroupedTransactions = {};
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 };
    }
    grouped[date].transactions.push(transaction);
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }
  return grouped;
};

export const TransactionList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
  );
  const transactions = await response.json();
  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <>
      <div className={"space-y-8"}>
        {Object.entries(groupedTransactions).map(
          ([date, { transactions, amount }]) => (
            <div key={date}>
              <TransactionSummary date={date} amount={amount} />
              <Seperator />
              <div className="space-y-4">
                {transactions.map((transaction: Transaction) => (
                  <div key={transaction.id}>
                    <TransactionItem
                      category={transaction.category}
                      type={transaction.type}
                      amount={transaction.amount}
                      description={transaction.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
};
