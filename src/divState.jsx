import { useState } from "react";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { divContext } from "./helper/divContext";

export const DivState = ({ children }) => {
  const size = useWindowWidth();
  const [divHeight, setDivHeight] = useState(500);

  return (
    <divContext.Provider value={{ divHeight, setDivHeight, size }}>
      {children}
    </divContext.Provider>
  );
};
