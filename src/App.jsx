import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AllProvider from "./context/AllProvider";
import StarCanvas from "./components/canvas/StarCanvas";

const App = () => {
  return (
    <div className="relative z-0 bg-[url('https://i.ibb.co/fdcwStL/gradient-Bd.jpg')]/1">
      <div>
        <AllProvider>
          <RouterProvider router={routes} />
        </AllProvider>
      </div>
      <StarCanvas />
    </div>
  );
};

export default App;
