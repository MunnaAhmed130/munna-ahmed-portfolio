import { RouterProvider } from "react-router-dom";
import ObserverProvider from "./context/AllProvider";
import routes from "./routes/routes";
import AllProvider from "./context/AllProvider";
import StarCanvas from "./components/canvas/StarCanvas";
import { space } from "./assets";

const App = () => {
  return (
    <div className="relative z-0 ">
      <div>
        <AllProvider>
          <RouterProvider router={routes} />
        </AllProvider>
      </div>
      <StarCanvas />
      <span
        className={` absolute inset-0 bg-space-image w-full h-auto z-[-2] bg-no-repeat bg-center opacity-[.12]`}
      ></span>
    </div>
  );
};

export default App;
