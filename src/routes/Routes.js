import { createBrowserRouter } from "react-router-dom";
// import { Main } from "../layout/Main";
import Home from "../Pages/Home";
import Main from "../layout/Main";

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
