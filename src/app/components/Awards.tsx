import React from 'react'
import styled from 'styled-components'
import List from '../components/List'
import awardsList from '../data/values/awards'

const Awards: React.FC = () => {
  const studyList: string[] = []
  const signateList: string[] = []

  for(const i in awardsList.study.awards) {
    studyList.push(
      `${awardsList.study.awards[i].name}: ${awardsList.study.awards[i].award}`
    )
  }
  for(const i in awardsList.signate.awards) {
    signateList.push(
      `${awardsList.signate.awards[i].name}: ${awardsList.signate.awards[i].award}`
    )
  }

  return(
    <Wrapper>
      <List title={awardsList.study.description}>
        {studyList}
      </List>
      <List title={awardsList.signate.description}>
        {signateList}
      </List>
    </Wrapper>
  )
}

/* Styles */
const Wrapper = styled.div`
  margin: 16px 0;
  padding: 0;
`

export default Awards;
