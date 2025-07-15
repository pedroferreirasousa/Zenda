'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = saved || "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
      </button>
      <p>O tema atual é: {theme}</p>
    </div>
  );
}
