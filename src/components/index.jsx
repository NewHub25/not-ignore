import { Link } from "react-router-dom";
import Carousel from "./slider";
import VideoSmall from "./video-small";

export const Index = () => {
  return (
    <>
      <h1>Soy el inicio</h1>
      <div className="App">
        <h1>Aplicación con Tema Claro/Oscuro</h1>
        <p>¡Este es un ejemplo de una aplicación con temas!</p>
        <Link to="newvideo">Ver el nuevo video</Link>
      </div>
      <Carousel title content />
      <VideoSmall
        title="Tutorial práctico: React y TypeScript paso a paso, crea tu primera
          aplicación"
        videoUrl="https://www.youtube.com/watch?v=4lAYfsq-2TE"
        technologies={["React", "Typescript"]}
      />
    </>
  );
};
