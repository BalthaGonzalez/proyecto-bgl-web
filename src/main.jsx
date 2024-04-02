import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import "./normalize.css";

import { Home } from './pages/home/home'
import { Cv } from './pages/cv/cv'
import { Portafolio } from './pages/portafolio/portafolio'
import ErrorPage from "./pages/error/error-page"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/portafolio",
    element: <Portafolio />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cv",
    element: <Cv />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
