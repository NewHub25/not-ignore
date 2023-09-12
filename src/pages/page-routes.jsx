import { useParams } from "react-router-dom";
import { PageLenguages } from "./page-languages";
import { PageTrend } from "./page-trend";

export const PageRoutes = () => {
  const { pageId } = useParams();

  const pages = {
    rutas: <PageLenguages />,
    tendencias: <PageTrend />,
  };
  return pages[pageId];
};
