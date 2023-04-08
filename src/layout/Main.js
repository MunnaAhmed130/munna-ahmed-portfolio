import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom/dist";

export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
