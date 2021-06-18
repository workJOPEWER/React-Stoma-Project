import React from "react";
import s from "./../InformationContent/InfoArticleItem/InformationArticleItem.module.scss";

const InformationBunner = (props) => {

  return (
    <div className={s.articleBlock}>
      <div className={s.bannerBlock}>
          <h2 className={s.text}>выберите интересующую вас информацию в раскрывающимся меню слева</h2>
        </div>
    </div>
  );
};

export default InformationBunner;