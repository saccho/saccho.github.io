import React from 'react'
import styled from 'styled-components'
import WorkCard from '../components/WorkCard'
import works from '../data/values/works'

const Works: React.FC = () =>{
  const workList = []
  for(const i in works) {
    workList.push(
      <Work>
        <WorkCard key={i} title={works[i].title} imgSrc={works[i].imgPath} 
          url={works[i].url} 
          description={works[i].description}
          languages={works[i].languages}
        />
      </Work>
    )
  }

  return(
    <Wrapper>
      {workList}
    </Wrapper>
  )
}

/* Styles */
const Work = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 20px;
`

const Wrapper = styled.div`
  margin: 15px 0;
  text-align: center;
`

export default Works;
