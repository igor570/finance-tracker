"use client";
import { Label, Select, Input, Button } from "@/app/components";
import { types, categories } from "@/lib/variants";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "@/lib/schema";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { clearTransactionListCache, createTransaction } from "@/lib/actions";

type transactionFormFields = z.infer<typeof transactionSchema>;

export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<transactionFormFields>({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema),
  });

  const router = useRouter();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const onSubmit: SubmitHandler<transactionFormFields> = async (data) => {
    if (!data) return;
    setIsSaving(true);
    try {
      const requestBody = {
        ...data,
        created_at: `${data.date}T00:00:00`,
        date: undefined,
      };

      //TODO: Fix react hook form not updating state of options before sending data off

      //send form data to postgres
      //clear cache and redirect to dashboard
      await createTransaction(requestBody);
      await clearTransactionListCache();
      router.push("/dashboard");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select
            {...register("type", {
              onChange: (e) => setValue("type", e.target.value),
            })}
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select
            {...register("category", {
              onChange: (e) => setValue("category", e.target.value),
            })}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </div>

        <div>
          <Label className="mb-1">Date</Label>
          <Input className={"default"} {...register("date")} />
          {errors.date && (
            <p className={"mt-2 text-red-400"}>{errors.date.message}</p>
          )}
        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" className={"default"} {...register("amount")} />
          {errors.amount && (
            <p className={"mt-2 text-red-400"}>{errors.amount.message}</p>
          )}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input
            type={"text"}
            className={"default"}
            {...register("description")}
          />
          {errors.description && (
            <p className={"mt-2 text-red-400"}>{errors.description.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button isDisabled={isSaving}>Save</Button>
      </div>
    </form>
  );
}
