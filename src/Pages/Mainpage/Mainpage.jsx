import React, { useEffect } from "react";
import "./Mainpage.scss";
import "../../style.scss";
import { useLocation } from "react-router-dom";
import ThemesMain from "../../Pages/Mainpage/Themes/ThemesMain";
import AboutUsMainPage from "./AboutUs/AboutMainPage";
import PartnersMain from "./Partners/PartnersMain";
import Contacts from "./Contacts/Contacts";
import BtnDetail from "../../Components/Buttons/BtnDetail";
import { HeadBlockTemplate } from "./Tamplates/HeadBlockTamplates";
import TitleComponent from "../../common/TitleComponent";
import NewsMain from "./News/NewsMain";
import Header from "../../common/Header/Header";
const Mainpage = (props) => {


  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <main className="page-wrapper" style={{ top: 0 }}>
      <Header/>
      <div className='main-page-section'>
        <TitleComponent title={props.title}/>
        <HeadBlockTemplate>
          <BtnDetail link={props.pathToProject}/>
        </HeadBlockTemplate>
        <ScrollToTop/>
        <ThemesMain heading={props.heading.themes} themes={props.themes}/>
        <NewsMain heading={props.heading.news}/>
        <AboutUsMainPage heading={props.heading.about}
                         about={props.about} link={props.about.link}/>
        <PartnersMain heading={props.heading.partners}/>
        <Contacts heading={props.heading.contacts} info={props.info}/>
      </div>
    </main>
  );
};

export default Mainpage;
