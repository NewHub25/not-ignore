import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ThemeToggleProvider } from "./components/ThemeProvider.jsx";
import { ErrorPage } from "./components/error-page.jsx";
import { Index } from "./components/index.jsx";
import { FormNewVideo } from "./components/form-new-video.jsx";

import "./index.css";
import { PageRoutes } from "./pages/page-routes.jsx";
import { Technologies } from "./components/technology.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "newvideo",
            element: <FormNewVideo />,
          },
          {
            path: "pages/:pageId",
            element: <PageRoutes />,
          },
          {
            path: "tech/:techId",
            element: <Technologies />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <RouterProvider router={router} />
    </ThemeToggleProvider>
  </React.StrictMode>
);
