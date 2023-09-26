import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ThemeToggleProvider } from "./components/ThemeProvider.jsx";
import { ErrorPage } from "./components/error-page.jsx";
import { Index } from "./components/index.jsx";
import { FormNewVideo } from "./components/form-new-video.jsx";
import { Technologies } from "./components/technology.jsx";
import { PageRoutes } from "./pages/page-routes.jsx";
import "./index.css";

import { loaderApp, loaderIndex } from "./logic/loaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: loaderApp,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: loaderIndex,
          },
          {
            path: "newvideo",
            element: <FormNewVideo />,
            loader: loaderIndex,
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
