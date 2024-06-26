export const variants = {
  default:
    "bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 disabled:opacity-25",
  outline:
    "border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 hover:dark:bg-gray-500 disabled:opacity-25",
  ghost:
    "rounded-md bg-white hover:bg-gray-300 dark:bg-black hover:dark:bg-gray-500 disabled:opacity-25",
};

export const sizes = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  base: "text-base px-4 py-2",
  lg: "text-lg px-4 py-2",
};

export const types = ["Income", "Expense", "Investment", "Saving"];

export const categories = [
  "Housing",
  "Transport",
  "Health",
  "Food",
  "Education",
  "Miscellaneous",
];

type Category =
  | "Housing"
  | "Transport"
  | "Health"
  | "Food"
  | "Education"
  | "Miscellaneous";

type Type = "Income" | "Expense" | "Investment" | "Saving";

export type Transaction = {
  id?: number | string;
  type: Type;
  date?: string;
  category: Category;
  amount: number;
  description: string;
};
