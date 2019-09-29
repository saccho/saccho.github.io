import React from 'react'
import styled from 'styled-components'
import awardsList from '../data/values/awards'

const Awards: React.FC = () => {
  const studyList = []
  const signateList = []

  for(const i in awardsList.study.awards) {
    studyList.push(
      <AwUl key={i}>
        <AwLi>
          {awardsList.study.awards[i].name}: {awardsList.study.awards[i].award}
        </AwLi>
      </AwUl>
    )
  }
  for(const i in awardsList.signate.awards) {
    signateList.push(
      <AwUl key={i}>
        <AwLi>
          {awardsList.signate.awards[i].name}: {awardsList.signate.awards[i].award}
        </AwLi>
      </AwUl>
    )
  }

  return(
    <Wrapper>
      <Aw>
        {awardsList.study.description}
        {studyList}
      </Aw>
      <Aw>
        {awardsList.signate.description}
        {signateList}
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
`

export default Awards;
