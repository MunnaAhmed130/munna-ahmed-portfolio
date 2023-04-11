import { RouterProvider } from "react-router-dom";
import ObserverProvider from "./context/ObserverProvider";
import routes from "./routes/routes";

const App = () => {
  return (
    <ObserverProvider>
      <RouterProvider router={routes} />
    </ObserverProvider>
  );
};

export default App;
