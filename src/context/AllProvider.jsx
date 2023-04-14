import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ALL_CONTEXT = createContext(null);

const AllProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [footerStyle, setFooterStyle] = useState(false);

  // console.log(value);
  const value = { toggle, setToggle, footerStyle, setFooterStyle };
  return <ALL_CONTEXT.Provider value={value}>{children}</ALL_CONTEXT.Provider>;
};

export default AllProvider;
