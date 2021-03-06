import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState({ width: undefined });
  useEffect(() => {
    function handleResize() {
      setWindowWidth({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}
