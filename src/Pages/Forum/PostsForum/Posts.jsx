import React from "react";
import f from "./Posts.module.scss";
import { Container, Table, Row, Col} from "react-bootstrap";
import Post from "../../../Components/Forum/Post/Post";

const Posts = (props) => {
  let postsElements = props.posts.posts
    .map(p => <Post key={p.id} title={p.title}
                    description={p.description}/>);
  return (
    <div>
      <div className="table-responsive">
        <Table bordered size="sm">
          <thead>
          <tr className={f.thead}>
            <th className={f.forumRool}>темы форума. категория колостома</th>
            <th className={f.two}>статистика</th>
            <th className={f.three}>последний пост</th>
          </tr>
          </thead>
              {postsElements}
        </Table>
      </div>
    </div>

  );
};

export default Posts;
