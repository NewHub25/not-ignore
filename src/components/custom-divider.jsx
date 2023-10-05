import { Divider } from "@mui/joy";
import { memo, useContext } from "react";
import { ThemeContext } from "styled-components";

export const CustomDivider = memo(function CustomDivider({
  orientation,
  children,
  sx,
}) {
  const toggleTheme = useContext(ThemeContext);

  return (
    <Divider
      orientation={orientation}
      sx={{
        "--Divider-lineColor": toggleTheme.text,
        // "--Divider-thickness": "2px",
        m: 0,
        ...sx,
      }}
    >
      {children}
    </Divider>
  );
});
