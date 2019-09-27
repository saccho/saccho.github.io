import React from 'react';
import styled from 'styled-components';
import awardsList from '../data/values/awards'

const Awards: React.FC = () => {
  const studyList = []
  const signateList = []

  for(const awardIdx in awardsList.study.awards) {
    studyList.push(
      <AwUl>
        <AwLi>
          {awardsList.study.awards[awardIdx].name}: {awardsList.study.awards[awardIdx].award}
        </AwLi>
      </AwUl>
    )
  }
  for(const awardIdx in awardsList.signate.awards) {
    signateList.push(
      <AwUl>
        <AwLi>
          {awardsList.signate.awards[awardIdx].name}: {awardsList.signate.awards[awardIdx].award}
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
  );
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
