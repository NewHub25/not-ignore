import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/app-bar";

function App() {
  return (
    <>
      <h1>
        <ResponsiveAppBar />
      </h1>
      <Outlet />
    </>
  );
}

export default App;
