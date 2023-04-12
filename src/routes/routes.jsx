import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../layout/Main";
import Projects from "../components/Projects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default routes;
