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
import { VideoRoom } from "./components/video-room.jsx";
import { FormBasic } from "./components/form.jsx";

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
            children: [
              {
                index: true,
                element: <FormBasic />,
                loader: loaderIndex,
              },
              {
                path: "newcategory",
                element: <p>Nueva categoria jiji</p>,
              },
            ],
          },
          {
            path: "pages/:pageId",
            element: <PageRoutes />,
          },
          {
            path: "tech/:techId",
            element: <Technologies />,
          },
          {
            path: "room/:roomId",
            element: <VideoRoom />,
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
