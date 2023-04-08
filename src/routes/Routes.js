import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "../layout/Header/Header";
import { Main } from "../layout/Main";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default routes;
