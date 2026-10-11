"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./theme-toggle.module.scss";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <button className={styles.toggleButton} disabled aria-label="Toggle theme">
        <Sun className={styles.icon} />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button className={styles.toggleButton} onClick={toggleTheme} aria-label="Toggle theme">
      {resolvedTheme === "light" ? (
        <Moon className={styles.icon} />
      ) : (
        <Sun className={styles.icon} />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
