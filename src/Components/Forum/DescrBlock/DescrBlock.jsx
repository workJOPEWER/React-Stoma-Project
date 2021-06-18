import React from "react";
import f from "./DescrBlock.module.scss";
import Fold from "../../../Components/Icons/forum/fold";
import Login from "../../../Components/Icons/login";

const DescrBlock = (props) => {
  return (
    <tbody>
    <tr>
      <td>
        <div className={f.descBlock}>
          <div className={f.svgWrap}>
            <Fold width={40} height={40}/>
          </div>
          <span className={f.descWrapper}>
            <a href="#" className={f.forumTitle}>{props.title}</a>
            <br/>
            <span className={f.description}>{props.dscr}</span>
        </span>
        </div>
      </td>
      <td className={f.two}>
        <div className={f.statistiCol}>
          <span> 10 Topics
            <br/>
            17 Posts </span>
        </div>
      </td>
      <td className={f.three}>
        <span className={f.lastWrapper}>
          <a href="">Re: Responsive Images</a>
          <br/>
          by
          <span> Arbuz</span>
          <a href="" title="View the latest post"> <Login/></a>
        </span>
        <br/>
        <span className={f.messageTime}>
          22 April 2020, 11:19
        </span>
      </td>
    </tr>
    </tbody>


  );
};

export default DescrBlock;