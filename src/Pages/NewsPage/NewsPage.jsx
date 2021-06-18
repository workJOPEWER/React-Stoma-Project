import React from "react";
import s from "./NewsPage.module.scss";
import Footer from "../../common/Footer/Footer";
import HeadBlock from "../../common/HeadBlock/HeadBlock";
import TitleComponent from "../../common/TitleComponent";
import ScrollToTop from "../../common/ScrollingOnSait/scrollToTop";
import NewsContent from "../../Components/NewsPageContent/NewsContent";
import useMediaQuery from "../../Components/Query/useMediaQuery";
import ScrollingOnSait from "../../common/ScrollingOnSait/ScrollQueryTop";

const NewsPage = (props) => {
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <div className="page-wrapper">
      <TitleComponent title={props.title}/>
      <div className={s.newsWrapper}>
        <HeadBlock headTitle={props.headings}/>
        <div className={s.wrapper} id={"content"}>
          {matches ? <ScrollingOnSait/> : <ScrollToTop/>}
          <NewsContent/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default NewsPage;