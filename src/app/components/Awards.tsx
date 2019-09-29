import React from 'react'
import styled from 'styled-components'
import awardsList from '../data/values/awards'

const Awards: React.FC = () => {
  const studyList = []
  const signateList = []

  for(const i in awardsList.study.awards) {
    studyList.push(
      <AwLi key={i}>
        {awardsList.study.awards[i].name}: {awardsList.study.awards[i].award}
      </AwLi>
    )
  }
  for(const i in awardsList.signate.awards) {
    signateList.push(
      <AwLi key={i}>
        {awardsList.signate.awards[i].name}: {awardsList.signate.awards[i].award}
      </AwLi>
    )
  }

  return(
    <Wrapper>
      <Aw>
        {awardsList.study.description}
        <AwUl>
          {studyList}
        </AwUl>
      </Aw>
      <Aw>
        {awardsList.signate.description}
        <AwUl>
          {signateList}
        </AwUl>
      </Aw>
    </Wrapper>
  )
}

/* Styles */
const Wrapper = styled.div`
  padding: 0;
`

const Aw = styled.div`
  margin: 16px 0;
`

const AwUl = styled.ul`
  padding-left: 30px;
`

const AwLi = styled.li`
  width: 100%;
  margin: 16px 0;
`

export default Awards;
