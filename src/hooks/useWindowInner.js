import * as React from "react";

const { useState, useEffect } = React;

export const useWindowInner = () => {
  let Inner;

  if (typeof window !== "undefined") {
    Inner = window.innerWidth;
  }
  const [isInnerWidth, setIsInnerWidth] = useState(Inner);

  useEffect(() => {
    const handleWindowResize = () => setIsInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return isInnerWidth;
};