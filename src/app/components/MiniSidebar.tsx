import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import siteInfo from '../data/values/siteInfo'
import { barBackground, barBackgroundHover, mainText } from '../data/colors/elements'
import { Color, Src } from '../data/types/elements'

const MiniSidebar: React.FC = () => {
  const list = []
  for(const i in siteInfo.pages){
    list.push(
      <PageLi key={i} color={barBackgroundHover}>
        <PageLink to={siteInfo.pages[i].path} color={mainText}>
          <PageImg src={siteInfo.pages[i].iconUrl} />
          <PageName>{siteInfo.pages[i].name}</PageName>
        </PageLink>
      </PageLi>
    )
  }

  return(
    <Wrapper color={barBackground}>
      <Title to="/"><TitleImg src={siteInfo.logo} /></Title>
      <PageUl>
        {list}
      </PageUl>
    </Wrapper>
  )
}

/* Styles */
const Wrapper = styled.div`
  background-color: ${(props: Color) => props.color};
  position: sticky;
  top: 0;
  width: 80px;
  height: 100vh;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const Title = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  @media only screen and (max-height: 330px) {
    margin-top: 10px;
  }
`

const TitleImg = styled.img`
  src: url(${(props: Src) => props.src});
  width: 64px;
  height: 64px;
`

const PageLi = styled.li`
  transition: background-color .1s;
  &:hover{
    background-color: ${(props: Color) => props.color};
  }
`

const PageImg = styled.img`
  src: url(${(props: Src) => props.src});
  width: 24px;
  height: 24px;
`

const PageName = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
`

const PageUl = styled.ul`
  padding: 0;
  list-style: none;
`

const PageLink = styled(Link)`
  width: 100%;
  padding: 15px 0;
  color: ${(props: Color) => props.color};
  text-decoration: none;
  display: inline-block;
  position: relative;
`

export default MiniSidebar;
