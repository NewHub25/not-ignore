import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/nav-app-bar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { OfflineComponent } from "./components/offline";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      {isOnline ? <Outlet /> : <OfflineComponent />}
      <Footer />
    </>
  );
}

export default App;
