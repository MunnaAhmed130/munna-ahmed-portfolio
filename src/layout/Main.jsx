import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import StarCanvas from "../components/canvas/StarCanvas";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
