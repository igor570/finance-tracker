import { TransactionList } from "@/app/dashboard/components/TransactionList";
import { Suspense } from "react";
import { TransactionListSuspsense } from "@/app/dashboard/components/TransactionListSuspsense";
import { FetchTrend } from "@/app/dashboard/components/FetchTrend";
import { FetchTrendSuspense } from "@/app/dashboard/components/FetchTrendSuspense";

const Page = () => {
  return (
    <>
      <section className={"mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8"}>
        <Suspense fallback={<FetchTrendSuspense />}>
          <FetchTrend type={"Income"} />
        </Suspense>
        <Suspense fallback={<FetchTrendSuspense />}>
          <FetchTrend type={"Expense"} />
        </Suspense>
        <Suspense fallback={<FetchTrendSuspense />}>
          <FetchTrend type={"Saving"} />
        </Suspense>
        <Suspense fallback={<FetchTrendSuspense />}>
          <FetchTrend type={"Investment"} />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionListSuspsense />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
