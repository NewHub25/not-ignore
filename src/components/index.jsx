import Carousel from "./carousel";
import { useLoaderData } from "react-router-dom";
import Footer from "./footer";

export const Index = () => {
  const CATEGORIES = useLoaderData();

  return (
    <>
      {CATEGORIES &&
        CATEGORIES.map(({ content, layer, title }) => (
          <Carousel key={title} content={content} layer={layer} title={title} />
        ))}
      <Footer />
    </>
  );
};
