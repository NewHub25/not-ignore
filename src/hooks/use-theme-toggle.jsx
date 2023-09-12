import { useContext } from "react";
import { ThemeToggleContext } from "../contexts/theme-toggle-context";

export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error("useThemeToggle debe usarse dentro de un ThemeProvider");
  }
  return context;
};
