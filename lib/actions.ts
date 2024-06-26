//server actions
"use server";

import { revalidateTag } from "next/cache";

export const clearTransactionListCache = async () => {
  revalidateTag("transaction-list");
};
