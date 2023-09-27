import CarouselList from "./carousel-list";
import { useLoaderData } from "react-router-dom";
import { CarouselMedia } from "./carousel-media";
import { CODE_IMAGES } from "./../utils/source-images.js";
export const Index = () => {
  const CATEGORIES = useLoaderData();

  return (
    <>
      <CarouselMedia
        images={CODE_IMAGES}
        sx={{ margin: "3rem auto 3rem", width: "500px", height: "400px" }}
      />
      {CATEGORIES &&
        CATEGORIES.map(({ content, layer, title }) => (
          <CarouselList
            key={title}
            content={content}
            layer={layer}
            title={title}
          />
        ))}
    </>
  );
};
