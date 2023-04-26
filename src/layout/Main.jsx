import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
