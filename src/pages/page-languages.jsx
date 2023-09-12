import { Link } from "react-router-dom";

export const PageLenguages = () => {
  return (
    <main>
      <section>
        <h2>Lenguajes</h2>
        <ul>
          <Link to='/language/javascript'>Javascript</Link>
          <Link>React</Link>
          <Link>Python</Link>
        </ul>
      </section>
      <section>
        <h2>Frameworks</h2>
        <ul>
          <Link>React</Link>
          <Link>Vue</Link>
          <Link>Angular</Link>
        </ul>
      </section>
      <section>
        <h2>Empaquetadores</h2>
        <ul>
          <Link>Vite</Link>
          <Link>webpack</Link>
        </ul>
      </section>
    </main>
  );
};
