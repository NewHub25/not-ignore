import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/app-bar";
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}

export default App;
