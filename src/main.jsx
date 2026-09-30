import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ChronicleListRoute from "./routes/ChronicleListRoute.jsx";
import ChronicleDetailRoute from "./routes/ChronicleDetailRoute.jsx";
import ChronicleCreateRoute from "./routes/ChromicleCreateRoute";
import ChronicleEditRoute from "./routes/ChronicleEditRoute";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ChronicleListRoute />,
        loader: ChronicleListRoute.loader,
      },
      {
        path: "/chronicles/:id",
        element: <ChronicleDetailRoute />,
        loader: ChronicleDetailRoute.loader,
      },
      {
        path: "/chronicles/create",
        element: <ChronicleCreateRoute />,
        action: ChronicleCreateRoute.action,
        errorElement: <div>Oops! Ein Fehler is aufgetreten</div>,
      },
      {
        path: "/chronicles/:id/edit",
        element: <ChronicleEditRoute />,
        loader: ChronicleEditRoute.loader,
        action: ChronicleEditRoute.action,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
