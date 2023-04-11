import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar";

export const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
