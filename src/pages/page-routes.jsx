import { useParams } from "react-router-dom";
import { PageCategories } from "./page-categories";

export const PageRoutes = () => {
  const { pageId } = useParams();

  const pages = {
    categories: <PageCategories />,
  };
  return pages[pageId];
};
