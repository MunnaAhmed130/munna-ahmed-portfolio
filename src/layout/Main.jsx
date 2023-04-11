import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
