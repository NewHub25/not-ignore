import { useParams } from "react-router-dom";
import { PageCategories } from "./page-languages";

export const PageRoutes = () => {
  const { pageId } = useParams();

  const pages = {
    categories: <PageCategories />,
  };
  return pages[pageId];
};
