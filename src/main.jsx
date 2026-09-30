import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ChronicleListRoute from "./routes/ChronicleListRoute.jsx";
import ChronicleDetailRoute from "./routes/ChronicleDetailRoute.jsx";
import Header from "./components/Header";
import ChronicleCreateRoute from "./routes/ChromicleCreateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
