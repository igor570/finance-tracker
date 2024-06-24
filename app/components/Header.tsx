import Link from "next/link";
import { DarkModeToggle } from "../components"
import useServerDarkMode from "@/hooks/useServerDarkMode";

export const Header = ({ className }: { className?: string }) => {
  const theme = useServerDarkMode();

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href={"/dashboard"}
        className={"text-xl hover:underline underline-offset-8 decoration-2"}
      >
        Finance App
      </Link>

      <div className={"flex items-center space-x-4"}>
        <DarkModeToggle defaultMode={theme} />
        <div>User Dropdown</div>
      </div>
    </header>
  );
};
