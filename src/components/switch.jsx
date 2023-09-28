import Switch from "@mui/joy/Switch";
import DarkMode from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { ThemeToggleContext } from "../contexts/theme-toggle-context";

export default function SwitchThumbChild() {
  const toggleTheme = useContext(ThemeToggleContext);
  const themeContext = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(themeContext.name === "dark");

  useEffect(() => {
    setIsDark(themeContext.name === "dark");
  }, [themeContext.name]);

  const isDarkHandle = (event) => {
    toggleTheme(event);
    setIsDark(event.target.checked);
  };

  return (
    <Switch
      onChange={isDarkHandle}
      checked={isDark}
      slotProps={{
        input: { "aria-label": isDark ? "dark" : "light" },
        thumb: {
          children: isDark ? <DarkMode /> : <LightModeIcon />,
        },
      }}
      sx={{
        "--Switch-thumbSize": "28px",
        // position: "absolute",
        // top: "4rem",
        // right: 10,
      }}
    />
  );
}
