import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [footerStyle, setFooterStyle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    location.pathname.includes("projects") && setFooterStyle(true);
    !location.pathname.includes("projects") && setFooterStyle(false);
  }, [location, setFooterStyle]);
  return (
    <footer
      className={`${
        footerStyle ? "lg:fixed static lg:bottom-0 " : "xs:fixed xs:bottom-0"
      } text-white    text-center w-full mb-2 font-poppins z-10`}
    >
      <p className="sm:text-sm text-[13px]">
        &copy;Copyrights 2023 by Munna Ahmed
      </p>
    </footer>
  );
};

export default Footer;
