import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollingOnSait = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 260);
  }, [pathname]);

  return null;
};

export default ScrollingOnSait;