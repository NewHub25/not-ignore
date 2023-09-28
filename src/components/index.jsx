import CarouselList from "./carousel-list";
import { useLoaderData } from "react-router-dom";
import { CarouselMedia } from "./carousel-media";
import { ASSETS_IMG } from "./../utils/source-images.js";
export const Index = () => {
  const CATEGORIES = useLoaderData();

  return (
    <>
      <CarouselMedia images={ASSETS_IMG} />
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
