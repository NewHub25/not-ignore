import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeToggleProvider } from "./components/ThemeProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./components/error-page.jsx";
import { Index } from "./components/index.jsx";
import "./index.css";
import { FormNewVideo } from "./components/form-new-video.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: createAction,
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
            // loader: contactLoader,
            // action: contactAction,
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
