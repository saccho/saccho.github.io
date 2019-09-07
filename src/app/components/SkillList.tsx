import React from 'react';
import Skill from './Skill';
import styled from 'styled-components';

type Props = {
  names: string[];
  levels: number[];
}

const SkillList: React.FC<Props> = (props) => {
  const skillList = []

  for(const i in props.names){
    skillList.push(
      <List>
        <Skill name={props.names[i]} level={props.levels[i]} />
      </List>
    )
  }

  return(
    <Wrapper>
      {skillList}
    </Wrapper>
  );
}

/* Styles */
const List = styled.li`
  width: 100%;
`

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`

export default SkillList;
