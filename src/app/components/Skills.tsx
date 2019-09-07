import React from 'react';
import Skill from './Skill';
import styled from 'styled-components';

const defaultColor = '#BDBDBD'

const skills = [
  {name: 'Python', level: 5, color: '#3572A5'},
  {name: 'MATLAB', level: 4, color: '#E16737'},
  {name: 'Kotlin', level: 3, color: '#F18E33'},
  {name: 'Go', level: 3, color: '#00ADD8'},
  {name: 'JavaScript', level: 3, color: '#F1E05A'},
  {name: 'TypeScript', level: 2, color: '#2B7489'},
  {name: 'HTML5', level: 4, color: '#E34C26'},
  {name: 'CSS3', level: 4, color: '#563D7C'},

  {name: 'Git / Github', level: 4, color: defaultColor},
  {name: 'Vue.js', level: 3, color: defaultColor},
  {name: 'React', level: 2, color: defaultColor},
  {name: 'Node.js', level: 1, color: defaultColor},
  {name: 'Firestore', level: 1, color: defaultColor},

  {name: 'Machine Learning', level: 4, color: defaultColor},
  {name: 'Deep Learning', level: 2, color: defaultColor},
  {name: 'Blockchain', level: 1, color: defaultColor},
]

const Skills: React.FC = () => {
  const list = []
  for(const i in skills){
    list.push(
      <SkillList>
        <Skill name={skills[i].name} level={skills[i].level}>
          {skills[i].name}
        </Skill>
      </SkillList>
    )
  }

  return(
    <Wrapper>
      {list}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  padding: 0;
  width: 95%;
`

const SkillList = styled.li`
  margin-top: 15px;
  list-style: none;
`

export default Skills;
