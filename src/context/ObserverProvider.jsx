import { createContext } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const OBSERVER_CONTEXT = createContext(null);

const ObserverProvider = ({ children }) => {
  const value = useIntersectionObserver();

  return (
    <OBSERVER_CONTEXT.Provider value={value}>
      {children}
    </OBSERVER_CONTEXT.Provider>
  );
};

export default ObserverProvider;
