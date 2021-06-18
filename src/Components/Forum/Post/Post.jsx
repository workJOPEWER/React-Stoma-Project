import React from "react";
import f from "./Post.module.scss";
import List from "../../Icons/forum/list";
import Login from "../../../Components/Icons/login";


const Post = (props) => {
  return (
    <tbody>
    <tr>
      <td>
        <div className={f.descBlock}>
          <div className={f.svgWrap}>
            <List width={45} height={45}/>
          </div>
          <span className={f.descWrapper}>
        <a href="#" className={f.forumTitle}>{props.title}</a>
        <br/>
        <span className={f.description}> <p>{props.description}</p></span>
      </span>
        </div>
      </td>
      <td className={f.two}>
              <span> 10 сообщений
                <br/>
                17 просмотров</span>
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
        <span className={f.forumTime}>
                22 April 2020, 11:19
              </span>
      </td>
    </tr>
    </tbody>

  );
};

export default Post;