import { RouterProvider } from "react-router-dom";
import ObserverProvider from "./context/AllProvider";
import routes from "./routes/routes";
import AllProvider from "./context/AllProvider";
import StarCanvas from "./components/canvas/StarCanvas";
import { profilePic, space } from "./assets";

const App = () => {
  return (
    <div className="relative z-0 ">
      <div>
        <AllProvider>
          <RouterProvider router={routes} />
        </AllProvider>
      </div>
      <StarCanvas />
      {/* <span
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')]  w-full h-auto z-[-2] bg-no-repeat bg-center opacity-[.4] `}
      /> */}
      {/* <img
        src="https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg"
        className="absolute inset-0 w-full object-cover  z-[-2] opacity-[.3] "
        alt=""
      /> */}
    </div>
  );
};

export default App;
