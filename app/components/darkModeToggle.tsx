"use client";

import useDarkMode from "@/hooks/useDarkMode";
import { Button } from "./Button";
import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = ({ defaultMode = "dark" }) => {
  const { theme, toggleTheme } = useDarkMode(defaultMode);
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "light" && <Moon className="w-4 h-4" />}
      {theme === "dark" && <Sun className="w-4 h-4" />}
    </Button>
  );
};
