import { useMediaQuery } from "@mui/material";
import CustomizedSteppers from "./customized-steppers";

export const FormNewVideo = () => {
  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <section
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src="/assets/cronometro.png"
        style={{
          flexGrow: 0,
          flexShrink: 2,
          maxWidth: "40%",
          ...(matches ? { display: "block" } : { display: "none" }),
        }}
      />
      <CustomizedSteppers step={1} />
    </section>
  );
};
