import React, { useState } from "react";
import s from "./Categories.module.scss";
import CategoriesList from "./Category/CategoriesList";
import cn from "classnames";

const Categories = ({ categoryName }) => {

  const [cliked, setCliked] = useState(false);

  const handleClick = () => {
    if (!cliked) {
      setCliked(true);
    } else setCliked(false);
  };

  return (
    <div className={s.rightBlock}>
      <div className={s.chooseCategory} onClick={handleClick}>
        {
          !cliked
            ? <h6 className={cn(s.subtitle, s.hoverClass)}>выбери <br/> категорию</h6>
            : <h6 className={s.closeBtn}>x</h6>
        }
      </div>
      <div className={s.fullCategories}>
        <div className={s.titleRight}>
          <h3 className={s.subtitle}>категории</h3>
        </div>
        <div className={s.blockList}>
          <CategoriesList categoryName={categoryName}/>
        </div>
      </div>
      <div style={{ display: cliked ? "block" : "none" }}>
        <CategoriesList categoryName={categoryName}/>
      </div>
    </div>
  );
};

export default Categories;