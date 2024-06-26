import Link from "next/link";
import { Suspense } from "react";
import { TransactionList } from "@/app/dashboard/components/TransactionList";
import { TransactionListSuspsense } from "@/app/dashboard/components/TransactionListSuspsense";
import { FetchTrend } from "@/app/dashboard/components/FetchTrend";
import { FetchTrendSuspense } from "@/app/dashboard/components/FetchTrendSuspense";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import { createClient } from "@/lib/supabase/server";

const Page = async () => {
  const client = createClient();
  const { data, error } = await client.from("transactions").select();
  return (
    <>
      <section className={"mb-8"}>
        <h1 className={"text-4xl font-semibold"}>Summary</h1>
      </section>

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
        <section className="flex justify-between items-center mb-8">
          <h2 className={"text-2xl font-semibold"}>Transactions</h2>
          <Link
            className={`flex items-center gap-2 ${variants["outline"]} ${sizes["sm"]}`}
            href={"/dashboard/transaction/add"}
          >
            <PlusCircle className={"w-4 h-4"} />
            Add
          </Link>
        </section>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default Page;
