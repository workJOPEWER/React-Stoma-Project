import React, { useEffect, useState } from "react";
import s from "./ScrollIndicator.module.scss";
import { useWindowScroll } from "react-use";

const ScrollToStart = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 980) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToStart = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className={s.scrollToStart}
      onClick={scrollToStart}
    >
      <div className={s.icon}>
        <div className={s.arrow8}></div>
      </div>
    </div>
  );
};

export default ScrollToStart;