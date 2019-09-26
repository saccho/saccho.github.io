import React from 'react';
import Skill from './Skill';
import styled from 'styled-components';

const defaultColor = '#424242'
const skills = {
  languages: [
    {name: 'Python', level: 5, color: '#3572A5'},
    {name: 'MATLAB', level: 4, color: '#E16737'},
    {name: 'Kotlin', level: 3, color: '#F18E33'},
    {name: 'Go', level: 3, color: '#00ADD8'},
    {name: 'JavaScript', level: 3, color: '#F1E05A'},
    {name: 'TypeScript', level: 2, color: '#2B7489'},
    {name: 'HTML5', level: 4, color: '#E34C26'},
    {name: 'CSS3', level: 4, color: '#563D7C'}
  ],
  others: [
    {name: 'Vue.js', level: 3, color: defaultColor},
    {name: 'React', level: 2, color: defaultColor},
    {name: 'Node.js', level: 1, color: defaultColor},
    {name: 'Git / Github', level: 4, color: defaultColor},
    {name: 'Firestore', level: 1, color: defaultColor},
    {name: 'Machine Learning', level: 4, color: defaultColor},
    {name: 'Deep Learning', level: 2, color: defaultColor},
    {name: 'Blockchain', level: 1, color: defaultColor}
  ]
}

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
