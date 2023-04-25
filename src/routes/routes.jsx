import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../layout/Main";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import ErrorPage from "../Pages/ErrorPage";
import { projects } from "../constant";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/projects",
        element: <Projects />,
        // loader: () => projects,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
