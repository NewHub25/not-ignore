import { Link } from "react-router-dom";
import CarouselRatio from "./slider";

export const Index = () => {
  return (
    <>
      <h1>Soy el inicio</h1>
      <div className="App">
        <h1>Aplicación con Tema Claro/Oscuro</h1>
        <p>¡Este es un ejemplo de una aplicación con temas!</p>
        <Link to="newvideo">Ver el nuevo video</Link>
      </div>
      <CarouselRatio />
    </>
  );
};
