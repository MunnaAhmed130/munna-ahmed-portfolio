import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <Outlet />
    </>
  );
};

export default Main;
