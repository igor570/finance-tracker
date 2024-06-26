//validation schemas
import { z } from "zod";

export const transactionSchema = z.object({
  type: z.enum(["Income", "Expense", "Saving", "Investment"]),
  category: z.enum([
    "Housing",
    "Transport",
    "Health",
    "Food",
    "Education",
    "Miscellaneous",
  ]),
  //converts input to number (coerce)
  amount: z.coerce.number().min(1, {
    message: "Amount must be at least 1",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  //check if the value is a number before parsing to a date
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date must contain a valid date",
  }),
});
