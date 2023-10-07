import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ThemeToggleProvider } from "./components/ThemeProvider.jsx";
import { ErrorPage } from "./components/error-page.jsx";
import { Index } from "./components/index.jsx";
import { PageFormVideo } from "./pages/form-page.jsx";
import { PageRoutes } from "./pages/page-routes.jsx";
import "./index.css";

import {
  actionNewCategory,
  actionNewVideo,
  loaderApp,
  loaderIndex,
  loaderNewVideo,
} from "./logic/loaders.js";
import { VideoRoom } from "./components/video-room.jsx";
import { FormBasic } from "./components/form-basic.jsx";
import { FormNewCategory } from "./components/form-new-category.jsx";
import { SnackbarProvider } from "notistack";

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
            element: <PageFormVideo />,
            loader: loaderIndex,
            children: [
              {
                index: true,
                element: <FormBasic />,
                action: actionNewVideo,
                loader: loaderNewVideo,
              },
              {
                path: "newcategory",
                loader: loaderNewVideo,
                element: <FormNewCategory />,
                action: actionNewCategory,
              },
            ],
          },
          {
            loader: loaderIndex,
            path: "pages/:pageId",
            element: <PageRoutes />,
          },
          {
            path: "room/:roomId",
            element: <VideoRoom />,
            loader: loaderIndex,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <SnackbarProvider
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️",
        }}
      >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeToggleProvider>
  </React.StrictMode>
);
