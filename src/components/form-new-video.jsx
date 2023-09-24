import { useMediaQuery } from "@mui/material";
import CustomizedSteppers from "./customized-steppers";
import CardLayers3d from "./card-layers";
import { CODE_IMAGES } from "../data/images-src";

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
      <CardLayers3d
        images={CODE_IMAGES}
        sx={{
          ...(matches ? { display: "block" } : { display: "none" }),
        }}
      />
      <CustomizedSteppers step={1} />
    </section>
  );
};
