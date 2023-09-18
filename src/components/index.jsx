import { Link } from "react-router-dom";
import Carousel from "./carousel";
import CATEGORIES from "./../data/categories.json";

export const Index = () => {
  return (
    <>
      <h1>Soy el inicio</h1>
      <div className="App">
        <h1>Aplicación con Tema Claro/Oscuro</h1>
        <p>¡Este es un ejemplo de una aplicación con temas!</p>
        <Link to="newvideo">Ver el nuevo video</Link>
      </div>
      {CATEGORIES.map(({ content, layer, title }) => (
        <Carousel key={title} content={content} layer={layer} title={title} />
      ))}
    </>
  );
};
