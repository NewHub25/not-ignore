import { useParams } from "react-router-dom";
import { PageCategories } from "./page-languages";
import { PageTrend } from "./page-trend";

export const PageRoutes = () => {
  const { pageId } = useParams();

  const pages = {
    category: <PageCategories />,
    trend: <PageTrend />,
  };
  return pages[pageId];
};
