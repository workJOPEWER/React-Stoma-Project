import React from 'react';
import n from "./Tabs.module.scss";
import { Nav} from "react-bootstrap";
import { useRouteMatch, Link} from "react-router-dom";


const NavItemTabs = (props) => {
  let {id} = useRouteMatch;
  let { url} = useRouteMatch();

  console.log(id)
  return (
    <div>
      {props.titles.map(t => <div key={t.id}>
          <Nav fill variant="tabs" className={n.tabs}  defaultActiveKey={"first"}>
            <Nav.Item active>
              <Nav.Link as={Link} to={`${url}/${t.firstName}`} className={(props.activeTab === 1 ? ' active' : '')}
                        eventKey="first" aria-selected="true" onClick={() => props.tabClicked(1)}>
                <span className={n.headingTitle}>{t.firstName}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to={`${url}/${t.secondName}`} className={(props.activeTab === 2 ? ' active' : '')}
                        eventKey="second" aria-selected="false" onClick={() => props.tabClicked(2)}>
                <span className={n.headingTitle}>{t.secondName}</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default NavItemTabs;