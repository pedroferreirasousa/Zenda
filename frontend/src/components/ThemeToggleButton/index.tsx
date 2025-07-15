'use client';

import { useTheme } from "@/hooks/useTheme";
import styles from "./styles.module.scss";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeToggleButton}>
      {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
};

export default ThemeToggleButton;
