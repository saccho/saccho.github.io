import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  children: string[];
};

const List: React.FC<Props> = props => {
  const childList = [];

  for (const i in props.children) {
    childList.push(<Li key={i}>{props.children[i]}</Li>);
  }

  return (
    <div>
      <p>{props.title}</p>
      <Ul>{childList}</Ul>
    </div>
  );
};

/* Styles */
const Ul = styled.ul`
  padding-left: 30px;
`;

const Li = styled.li`
  width: 100%;
  margin: 16px 0;
`;

export default List;
