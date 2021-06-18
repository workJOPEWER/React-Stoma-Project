import React, { useEffect } from "react";
import "./InfoPage.module.scss";
import s from "./InfoPage.module.scss";
import Footer from "../../common/Footer/Footer";
import HeadBlock from "../../common/HeadBlock/HeadBlock";
import TitleComponent from "../../common/TitleComponent";
import ScrollToTop from "../../common/ScrollingOnSait/scrollToTop";
import InfoPageContentContainer from "../../Containers/InfoPageContentContainer";
import useMediaQuery from "../../Components/Query/useMediaQuery";
import ScrollingOnSait from "../../common/ScrollingOnSait/ScrollQueryTop";

const InfoPage = (props) => {
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <div className="page-wrapper">
      <TitleComponent title={props.title}/>
      <HeadBlock headTitle={props.headBlock}/>
      <div className={s.infoWrapper} id={"content"}>
        {matches ? <ScrollingOnSait/> : <ScrollToTop/>}
        <InfoPageContentContainer/>
      </div>
      <Footer/>
    </div>
  );
};

export default InfoPage;