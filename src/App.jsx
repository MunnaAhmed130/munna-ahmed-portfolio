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
        className="app absolute
       inset-0 w-full h-auto z-[-2]"
      ></span>
      {/* <img
        className="absolute z-[-2] top-0  opacity-40 object-cover"
        src={space}
        alt=""
      /> */}
    </div>
  );
};

export default App;
