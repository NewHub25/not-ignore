import { useParams } from "react-router-dom";

export const LanguageId = () => {
  const { languageId } = useParams();
  return <h3>Bienvenidos a la pagina de {languageId} ...</h3>;
};
