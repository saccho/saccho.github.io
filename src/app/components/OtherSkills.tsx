import React from 'react'
import Skill from './Skill'
import styled from 'styled-components'
import skills from '../data/values/skills'

const OtherSkills: React.FC = () => {
  const otherList = []
  for(const i in skills.others){
    const other = skills.others[i]
    otherList.push(
      <SkillList key={i}>
        <Skill level={other.level} color={other.color} icon={other.icon}>
          {other.name}
        </Skill>
      </SkillList>
    )
  }

  return(
    <div>
      <Wrapper>
        {otherList}
      </Wrapper>
    </div>
  )
}

/* Styles */
const Wrapper = styled.ul`
  padding: 0;
`

const SkillList = styled.li`
  display: inline-block;
  margin: 0 12px 24px 12px;
  list-style: none;
`

export default OtherSkills
