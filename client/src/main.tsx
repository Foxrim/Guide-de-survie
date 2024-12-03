// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";
import Outils from "./components/Outils";
import AbrisPage from "./pages/AbrisPage";
import Home from "./pages/Home";
import Nourriture from "./pages/Nourriture";
import SoinsPage from "./pages/SoinsPage";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/nourriture",
        element: <Nourriture />,
      },
      {
        path: "/home/abris",
        element: <AbrisPage />,
      },
      {
        path: "/home/outils",
        element: <Outils />,
      },
      {
        path: "/home/outils",
        element: <Outils />,
      },
      {
        path: "/home/soins",
        element: <SoinsPage />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
