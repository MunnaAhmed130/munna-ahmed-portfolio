import { useContext } from "react";
import { ALL_CONTEXT } from "../context/AllProvider";

const useAll = () => {
  const all = useContext(ALL_CONTEXT);
  return all;
};

export default useAll;
