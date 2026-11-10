"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-foreground"
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {mounted ? (
        isDark ? <Sun size={20} /> : <Moon size={20} />
      ) : (
        <span className="block h-5 w-5" />
      )}
    </button>
  );
}
