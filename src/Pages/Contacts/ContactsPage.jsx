import React from "react";
import f from "./ContactsPage.module.scss";
import FooterContainer from "../../common/Footer/Footer";
import HeadBlock from "../../common/HeadBlock/HeadBlock";
import ScrollToTop from "../../common/ScrollingOnSait/scrollToTop";
import TitleComponent from "../../common/TitleComponent";
import ContactContent from "./ContactContent";
import useMediaQuery from "../../Components/Query/useMediaQuery";
import ScrollingOnSait from "../../common/ScrollingOnSait/ScrollQueryTop";

const ContactsPage = (props) => {
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <div className="page-wrapper">
      <TitleComponent title={props.title}/>
      <div className={f.newsWrapper}>
        <HeadBlock headTitle={props.headBlock}/>
        <div className={f.wrapper} id={"content"}>
          {matches ? <ScrollingOnSait/> : <ScrollToTop/>}
          <ContactContent />
        </div>
        <FooterContainer/>
      </div>
    </div>
  );
};

export default ContactsPage;