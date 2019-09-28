import React from 'react'
import styled from 'styled-components'
import conferences from '../data/values/study'

const Conferences: React.FC = () => {
  const iConfList = []
  const dConfList = []
  const dTechList = []

  for(const confIdx in conferences.international.papers){
    const iConf = conferences.international.papers[confIdx]
    iConfList.push(
      <ConfUl>
        <ConfLi>
          {iConf.authors}, "{iConf.title}," {iConf.publication}, {iConf.date}.
        </ConfLi>
      </ConfUl>
    )
  }
  for(const confIdx in conferences.domestic.papers){
    const dConf = conferences.domestic.papers[confIdx]
    dConfList.push(
      <ConfUl>
        <ConfLi>
          {dConf.authors}, "{dConf.title}," {dConf.publication}, {dConf.date} ({dConf.language}).
        </ConfLi>
      </ConfUl>
    )
  }
  for(const techIdx in conferences.tech.papers){
    const tech = conferences.tech.papers[techIdx]
    dTechList.push(
      <ConfUl>
        <ConfLi>
          {tech.authors}, "{tech.title}," {tech.publication}, {tech.date}.
        </ConfLi>
      </ConfUl>
    )
  }

  return(
    <Wrapper>
      <Conf>
        {conferences.international.description}
        {iConfList}
      </Conf>
      <Conf>
        {conferences.domestic.description}
        {dConfList}
      </Conf>
      <Conf>
        {conferences.tech.description}
        {dTechList}
      </Conf>
    </Wrapper>
  )
}

/* Styles */
const Wrapper = styled.div`
  padding: 0;
`

const Conf = styled.div`
  margin: 16px 0;
`

const ConfUl = styled.ul`
  padding-left: 30px;
`

const ConfLi = styled.li`
  width: 100%;
`

export default Conferences;
