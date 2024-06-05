type classNames = "checkbox" | "default";

const typeStyles = {
  checkbox:
    "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm",
  default:
    "w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 ",
};

export const Input = ({
  type,
  className,
}: {
  type: string;
  className: classNames;
}) => {
  return (
    <input
      type={type}
      className={typeStyles[className] ?? typeStyles.default}
    />
  );
};
