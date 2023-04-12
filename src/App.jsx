import { RouterProvider } from "react-router-dom";
import ObserverProvider from "./context/AllProvider";
import routes from "./routes/routes";
import AllProvider from "./context/AllProvider";

const App = () => {
  return (
    <AllProvider>
      <RouterProvider router={routes} />
    </AllProvider>
  );
};

export default App;
