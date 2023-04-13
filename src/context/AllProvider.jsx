import { createContext, useState } from "react";

export const ALL_CONTEXT = createContext(null);

const AllProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const value = { toggle, setToggle };
  // console.log(value);
  return <ALL_CONTEXT.Provider value={value}>{children}</ALL_CONTEXT.Provider>;
};

export default AllProvider;
