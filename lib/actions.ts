//server actions
"use server";

import { revalidateTag } from "next/cache";
import { createClient } from "./supabase/server";
import { ampFirstEntryNamesMap } from "next/dist/build/webpack/plugins/next-drop-client-page-plugin";
import { Transaction } from "@/lib/variants";

export const clearTransactionListCache = async () => {
  revalidateTag("transaction-list");
};

export const createTransaction = async (formData: Transaction) => {
  console.log(formData);
  await createClient().from("transactions").insert(formData);
};
