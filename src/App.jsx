import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/app-bar";
import { useEffect } from "react";
import { saveSession } from "./logic/save-session";
import { fetchData } from "./logic/fetch";

function App() {
  useEffect(() => {
    (async () => {
      saveSession(await fetchData());
    })();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}

export default App;
