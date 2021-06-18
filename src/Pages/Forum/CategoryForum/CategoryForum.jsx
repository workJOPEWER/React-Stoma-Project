import React from "react";
import f from "./MainForum.module.scss";
import { Table } from "react-bootstrap";
import THead from "../../../Components/Forum/TableHead/THead";
import DescrBlock from "../../../Components/Forum/DescrBlock/DescrBlock";


const CategoryForum = (props) => {

  let tHElements = props.table.map(t => <THead key={t.id} name={t.name} stTitle={t.stTitle} pstTitle={t.pstTitle}/>);
  let categoryElements = props.category.map(c => <DescrBlock key={c.id} title={c.title} dscr={c.dscr}/>);

  return (
    <div className={f.bodyBlock}>
      <div className="table-responsive">
        <Table bordered size="sm">
          {tHElements}
          {categoryElements}
        </Table>
      </div>
    </div>

  );
};
export default CategoryForum;