// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import {Container} from 'react-bootstrap';
// import { useSelector } from "react-redux";
// import MainNavForum from "../../../../Components/Forum/NavForum/MainNavForum";
// import { MainTemplate } from "../MainTemplate";
// import HeadBlock from "../../../../common/HeadBlock/HeadBlock";
// import Footer from "../../../../common/Footer/Footer";
//
// type Props = {
//   headBlock?: React.Node,
//   header?: React.Node,
//   footer?: React.Node,
//   children: React.Node,
// }
//
// export const MainForumTemplate = ({ headBlock, header, footer, children }: Props) => {
//   const isAuth = useSelector(state => state.auth.isAuth);
//   const headTitle = useSelector(state => state.headBlock.forum);
//
//
//   return (
//     <MainTemplate footer={Footer} headBlock={HeadBlock} >
//       <CommonContent>
//           {headBlock && <HeadBlock headTitle={headTitle}>{headBlock}</HeadBlock>}
//           {header && <MainNavForum isAuth={isAuth}>{header}</MainNavForum>}
//         <Container>
//           {children}
//         </Container>
//       </CommonContent>
//     </MainTemplate>
//   );
// };
// MainForumTemplate.propTypes = {
//   HeadBlock: PropTypes.node,
//   MainNavForum: PropTypes.node,
//   children: PropTypes.node.isRequired,
//   Footer: PropTypes.node,
//
// };
//
// MainForumTemplate.defaultProps = {
//   HeadBlock: <HeadBlock/>,
//   header: <MainNavForum/>,
//   footer: <Footer/>,
// };
//
//
// const CommonContent = styled.div`
//   margin: 0;
//   padding: 0;
//   display: block;
//   `;
