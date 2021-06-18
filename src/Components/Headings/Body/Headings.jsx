import React from "react";
import f from "./Headings.module.scss";

const Headings = (props) => {
  return (
    <>
      {
        props.heading.map(heading => <div key={heading.id}>
          <div className={f.heading}>
            <h3 className={f.headingSubtitle}>{heading.subtitle}</h3>
            <div className={f.dubbleTitle}>
              <h3 className={f.headingTitle}>{heading.title}</h3>
              <h3 className={f.headingTitle}>{heading.aTitle}</h3>
            </div>
          </div>
        </div>)
      }
    </>
  );
};

export default Headings;