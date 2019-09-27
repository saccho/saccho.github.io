import React from 'react'
import Skill from './Skill'
import styled from 'styled-components'
import skills from '../data/values/skills'

const Skills: React.FC = () => {
  const langList = []
  for(const i in skills.languages){
    const lang = skills.languages[i]
    langList.push(
      <SkillList>
        <Skill name={lang.name} level={lang.level} color={lang.color}>
          {lang.name}
        </Skill>
      </SkillList>
    )
  }

  const otherList = []
  for(const i in skills.others){
    const other = skills.others[i]
    otherList.push(
      <SkillList>
        <Skill name={other.name} level={other.level} color={other.color}>
          {other.name}
        </Skill>
      </SkillList>
    )
  }

  return(
    <div>
      <Wrapper>
        {langList}
      </Wrapper>
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

export default Skills;
