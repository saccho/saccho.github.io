import React from 'react';
import styled from 'styled-components';

const awards = {
  study: [
    {
      name: '2018 IEICE Shinetsu Branch Conference',
      award: 'Student Encouragement Award'
    }
  ],
  signate: [
    {
      name: '飯田産業 土地の販売価格の推定',
      award: 'Silver Medal (35th / 593)'
    }
  ]
}

const Awards: React.FC = () => {
  const studyList = []
  const signateList = []

  for(const awardIdx in awards.study){
    const studyAward = awards.study[awardIdx]
    studyList.push(
      <AwUl>
        <AwLi>
          {studyAward.name}: {studyAward.award}
        </AwLi>
      </AwUl>
    )
  }
  for(const awardIdx in awards.signate){
    const signateAward = awards.signate[awardIdx]
    signateList.push(
      <AwUl>
        <AwLi>
          {signateAward.name}: {signateAward.award}
        </AwLi>
      </AwUl>
    )
  }

  return(
    <Wrapper>
      <Aw>
        Study
        {studyList}
      </Aw>
      <Aw>
        Signate (Japan Data Science Competition)
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
