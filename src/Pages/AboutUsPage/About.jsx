import React from "react";
import s from "./About.module.scss";
import HeadBlock from "../../common/HeadBlock/HeadBlock";
import Footer from "../../common/Footer/Footer";
import ScrollToTop from "../../common/ScrollingOnSait/scrollToTop";
import TitleComponent from "../../common/TitleComponent";
import AboutContent from "../../Components/AboutContent/AboutContent";
import useMediaQuery from "../../Components/Query/useMediaQuery";
import ScrollingOnSait from "../../common/ScrollingOnSait/ScrollQueryTop";

const About = (props) => {
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <div className="page-wrapper" style={{ top: 0 }}>
      <TitleComponent title={props.title}/>
      <HeadBlock headTitle={props.headBlock}/>
      {matches ? <ScrollingOnSait/> : <ScrollToTop/>}
      <div className={s.infoWrapper} id={"content"}>
        <AboutContent cards={props.cards}/>
      </div>
      <Footer/>
    </div>
  );
};

export default About;