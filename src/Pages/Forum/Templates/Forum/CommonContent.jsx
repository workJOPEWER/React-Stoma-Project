import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MainForumTemplate } from "./MainForumTemplate";
import HeadBlock from "../../../../common/HeadBlock/HeadBlock";
import Rules from "../../../../Components/Forum/Rules/Rules";
import { useSelector } from "react-redux";
import StatisticBlock from "../../../../Components/Forum/StatisticBlock/StatisticBlock";


type Props = {
  children: React.Node,
  headBlock?: React.Node,

}

export const CommonContentTemplate = ({ headBlock, rules, statistic, children }: Props) => {
  const headings = useSelector(state => state.mainForum.headings);

  return (
    <MainForumTemplate headBlock={HeadBlock} rules={Rules}>
      <CommonContent>
        {rules && <Rules headings={headings}>{rules}</Rules>}
        {children}
        {statistic && <StatisticBlock>{statistic}</StatisticBlock>}
      </CommonContent>
    </MainForumTemplate>
  );
};

CommonContentTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  headBlock: PropTypes.node,
  rules: <Rules/>,
  statistic: PropTypes.node,
};

CommonContentTemplate.defaultProps = {
  statistic: <StatisticBlock/>,
  rules: <Rules/>
};

export const CommonContent = styled.div`
   margin-top: 50px;
   padding: 162px 0 100px;
  `;