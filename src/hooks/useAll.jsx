import { useContext } from "react";
import { ALL_CONTEXT } from "../context/AllProvider";
// import { OBSERVER_CONTEXT } from "../App";

const useAll = () => {
  const all = useContext(ALL_CONTEXT);
  return all;
};

export default useAll;
