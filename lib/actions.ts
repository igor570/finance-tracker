//server actions
"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { createClient } from "./supabase/server";
import { Transaction } from "@/lib/variants";
import { transactionSchema } from "@/lib/schema";

export const clearTransactionListCache = async (tag: string) => {
  revalidateTag(tag);
};

export const createTransaction = async (formData: Transaction) => {
  const validatedFormData = transactionSchema.safeParse(formData); //validating the data against Zod schema

  if (!validatedFormData.success) {
    throw new Error("Invalid Data in Form");
  }

  const { error } = await createClient()
    .from("transactions")
    .insert(validatedFormData.data);
  if (error) {
    throw new Error("Failed: Creating transaction");
  }

  revalidatePath("/dashboard"); //re-route back to dashboard
};
