import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/app-bar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
