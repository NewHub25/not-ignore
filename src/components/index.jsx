import { Link } from "react-router-dom";
import { useThemeToggle } from "./../hooks/use-theme-toggle";

export const Index = () => {
  const toggleTheme = useThemeToggle();

  return (
    <>
      <h1>Soy el inicio</h1>
      <div className="App">
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <h1>Aplicación con Tema Claro/Oscuro</h1>
        <p>¡Este es un ejemplo de una aplicación con temas!</p>
        <Link to="newvideo">Ver el nuevo video</Link>
      </div>
    </>
  );
};
