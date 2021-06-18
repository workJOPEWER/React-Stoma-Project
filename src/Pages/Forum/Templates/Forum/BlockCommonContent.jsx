// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import HeadBlock from "../../../../common/HeadBlock/HeadBlock";
// import Rules from "../../../../Components/Forum/Rules/Rules";
// import { Row, Col } from "react-bootstrap";
// // import { useSelector } from 'react-redux';
// import StatisticBlock from "../../../../Components/Forum/StatisticBlock/StatisticBlock";
// import { CommonContentTemplate } from "./CommonContent";
// import ButtonForm from "../../../../common/FormButton/ButtonForm";
// import Breadcrumb from "../../../../Components/Breadcrumb/Breadcrumb";
// // import { Redirect } from "react-router-dom";
//
// type Props = {
//   children: React.Node,
// }
//
// export const BlockCommonContentTemplate = ({ breadcrumb, button, children }: Props) => {
//   // const headings = useSelector(state => state.mainForum.headings);
//   {/*<Redirect to={"/newpost"}/>
//   вывести в редюсер и функцию провести через пропсы или импорт*/}
//
//   return (
//     <CommonContentTemplate headBlock={HeadBlock} rules={Rules}>
//       <CommonContent>
//         <Row>
//           <Col md={8} xs={12}>
//             {breadcrumb && <Breadcrumb>{breadcrumb}</Breadcrumb>}
//           </Col>
//           <Col md={4} xs={12}>
//             <ButtonContent>
//               {button && <ButtonForm name={"новая тема"}>{button}</ButtonForm>}
//             </ButtonContent>
//           </Col>
//         </Row>
//         {children}
//       </CommonContent>
//     </CommonContentTemplate>
//   );
// };
//
// BlockCommonContentTemplate.propTypes = {
//   children: PropTypes.node.isRequired,
//   rules: <Rules/>,
//   statistic: PropTypes.node,
//   breadcrumb: PropTypes.node,
//   button: PropTypes.node
// };
//
// BlockCommonContentTemplate.defaultProps = {
//   statistic: <StatisticBlock/>,
//   rules: <Rules/>,
//   breadcrumb: <Breadcrumb/>,
//   button: <ButtonForm/>
//
// };
//
// export const CommonContent = styled.div`
//   margin-top:60px;
//   `;
// export const ButtonContent = styled.div`
//   text-align:right;
//   margin-right: 20px;
//    @media only screen and (min-width: 320px){
//   text-align:center;
//
//   }
//
//   `;