import { useMediaQuery } from "@mui/material";
import CustomizedSteppers from "./customized-steppers";
import CardLayers3d from "./card-layers";
import { CODE_IMAGES } from "../data/images-src";
import { CarouselMedia } from "./carousel-media";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

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
      {/* <CardLayers3d
        images={CODE_IMAGES}
        sx={{
          ...(matches ? { display: "block" } : { display: "none" }),
        }}
      /> */}
      <CarouselMedia images={images}/>
      {/* <CustomizedSteppers step={1} /> */}
    </section>
  );
};
