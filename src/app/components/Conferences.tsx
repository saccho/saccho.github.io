import React from 'react'
import styled from 'styled-components'
import conferences from '../data/values/study'

const Conferences: React.FC = () => {
  const iConfList = []
  const dConfList = []
  const dTechList = []

  for(const i in conferences.international.papers){
    const iConf = conferences.international.papers[i]
    iConfList.push(
      <ConfLi key={i}>
        {iConf.authors}, "{iConf.title}," {iConf.publication}, {iConf.date}.
      </ConfLi>
    )
  }
  for(const i in conferences.domestic.papers){
    const dConf = conferences.domestic.papers[i]
    dConfList.push(
      <ConfLi key={i}>
        {dConf.authors}, "{dConf.title}," {dConf.publication}, {dConf.date} ({dConf.language}).
      </ConfLi>
    )
  }
  for(const i in conferences.tech.papers){
    const tech = conferences.tech.papers[i]
    dTechList.push(
      <ConfLi key={i}>
        {tech.authors}, "{tech.title}," {tech.publication}, {tech.date}.
      </ConfLi>
    )
  }

  return(
    <Wrapper>
      <Conf>
        {conferences.international.description}
        <ConfUl>
          {iConfList}
        </ConfUl>
      </Conf>
      <Conf>
        {conferences.domestic.description}
        <ConfUl>
          {dConfList}
        </ConfUl>
      </Conf>
      <Conf>
        {conferences.tech.description}
        <ConfUl>
          {dTechList}
        </ConfUl>
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
  margin: 16px 0;
`

export default Conferences;
