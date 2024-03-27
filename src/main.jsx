import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Home } from './pages/Home'
import ErrorPage from "./error-page"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/portafolio",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cv",
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
