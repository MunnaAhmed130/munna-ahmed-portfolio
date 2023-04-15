import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAll from "../hooks/useAll";

const Footer = () => {
  const { footerStyle, setFooterStyle } = useAll();
  const location = useLocation();
  useEffect(() => {
    location.pathname.includes("projects") && setFooterStyle(true);
    !location.pathname.includes("projects") && setFooterStyle(false);
  }, [location, setFooterStyle]);
  return (
    <footer
      className={`${
        footerStyle ? "lg:fixed  lg:bottom-0 " : "fixed bottom-0"
      }    text-center w-full mb-2 font-poppins z-10`}
    >
      <p className="sm:text-sm text-[13px] text-white ">
        &copy;Copyrights 2023 by Munna Ahmed
      </p>
    </footer>
  );
};

export default Footer;
