import { useContext } from "react";
import { OBSERVER_CONTEXT } from "../context/ObserverProvider";
// import { OBSERVER_CONTEXT } from "../App";

const useObserver = () => {
  const observer = useContext(OBSERVER_CONTEXT);
  return observer;
};

export default useObserver;
