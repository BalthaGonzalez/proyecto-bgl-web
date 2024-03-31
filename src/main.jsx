import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import "./normalize.css";

import { Home } from './pages/Home'
import { Cv } from './pages/Cv'
import { Portafolio } from './pages/Portafolio'
import ErrorPage from "./pages/error-page"
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
