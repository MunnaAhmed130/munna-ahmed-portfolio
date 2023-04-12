import { createContext, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const ALL_CONTEXT = createContext(null);

const AllProvider = ({ children }) => {
  const [fast, setFast] = useState(false);
  const value = { ...useIntersectionObserver(), setFast };
  console.log(value);
  return <ALL_CONTEXT.Provider value={value}>{children}</ALL_CONTEXT.Provider>;
};

export default AllProvider;
