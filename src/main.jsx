import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Home } from './pages/Home'
import ErrorPage from "./error-page"
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/portafolio",
    element: <div>Portafolio</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/cv",
    element: <div>CV</div>,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
