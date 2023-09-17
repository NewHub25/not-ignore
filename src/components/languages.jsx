import { useParams } from "react-router-dom";

export const Technologies = () => {
  const { techId } = useParams();
  return <h3>Bienvenidos a la pagina de {techId} ...</h3>;
};
