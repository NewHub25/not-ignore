import { Divider } from "@mui/joy";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const CustomDivider = ({ orientation, children }) => {
  const toggleTheme = useContext(ThemeContext);

  return (
    <Divider
      orientation={orientation}
      sx={{
        "--Divider-lineColor": toggleTheme.text,
        // "--Divider-thickness": "2px",
        m:0,
      }}
    >
      {children}
    </Divider>
  );
};
