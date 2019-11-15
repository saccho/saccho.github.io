import React from 'react'
import Skill from './Skill'
import styled from 'styled-components'
import skills from '../data/values/skills'

const Skills: React.FC = () => {
  const langList = []
  for(const i in skills.languages){
    const lang = skills.languages[i]
    langList.push(
      <SkillList key={i}>
        <Skill level={lang.level} color={lang.color} icon={lang.icon} />
      </SkillList>
    )
  }

  const libList = []
  for(const i in skills.libraries){
    const lib = skills.libraries[i]
    libList.push(
      <SkillList key={i}>
        <Skill level={lib.level} color={lib.color} icon={lib.icon} />
      </SkillList>
    )
  }

  const toolList = []
  for(const i in skills.tools){
    const tool = skills.tools[i]
    toolList.push(
      <SkillList key={i}>
        <Skill level={tool.level} color={tool.color} icon={tool.icon} />
      </SkillList>
    )
  }

  return(
    <div>
      <Wrapper>
        {langList}
      </Wrapper>
      <Wrapper>
        {libList}
      </Wrapper>
      <Wrapper>
        {toolList}
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

export default Skills
