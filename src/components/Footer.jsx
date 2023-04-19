import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAll from "../hooks/useAll";

const Footer = () => {
  const { footerStyle, setFooterStyle } = useAll();

  return (
    <footer className="text-center w-full mb-2 font-poppins z-10">
      <p className="sm:text-sm text-[13px] text-white ">
        &copy; 2023 Portfolio by Munna Ahmed
      </p>
    </footer>
  );
};

export default Footer;
