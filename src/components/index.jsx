import Carousel from "./carousel";
import { getSession } from "../logic/save-session";

export const Index = () => {
  const CATEGORIES = getSession();

  return (
    <>
      <h1>Soy el inicio</h1>
      <div className="App">
        <h1>Aplicación con Tema Claro/Oscuro</h1>
        <p>¡Este es un ejemplo de una aplicación con temas!</p>
      </div>
      {CATEGORIES &&
        CATEGORIES.map(({ content, layer, title }) => (
          <Carousel key={title} content={content} layer={layer} title={title} />
        ))}
    </>
  );
};
