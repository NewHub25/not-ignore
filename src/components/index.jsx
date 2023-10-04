import CarouselList from "./carousel-list";
import { useLoaderData } from "react-router-dom";
import { CarouselMedia } from "./carousel-media";
import { ASSETS_IMG } from "./../utils/source-images.js";
import extractVideoId from "../logic/extract-video-id";
export const Index = () => {
  const CATEGORIES = useLoaderData();

  return (
    <>
      <CarouselMedia images={ASSETS_IMG} />
      {CATEGORIES &&
        CATEGORIES.map(({ content, layer, title }) => {
          if (!content[0]?.url) return;
          if (!extractVideoId(content[0].url).idYouTube) return;
          return (
            <CarouselList
              key={title}
              content={content}
              layer={layer}
              title={title}
            />
          );
        })}
    </>
  );
};
