import React from 'react'
import styled from 'styled-components'
import { mainText, card, worksCardHover, linkTextHover } from '../data/colors/elements'
import { Color, Src } from '../data/types/elements'

type Language = {
  name: string
  color: string
}

type Props = {
  title: string
  imgSrc: string
  description: string
  url: string
  languages: Language[]
}

type CardColors = {
  border: string
  borderHover: string
  textHover: string
}

const WorkCard: React.FC<Props> = (props) => {
  const langList = []
  for(const i in props.languages) {
    const red = parseInt(props.languages[i].color.substring(1, 3), 16)
    const green = parseInt(props.languages[i].color.substring(3, 5), 16)
    const blue = parseInt(props.languages[i].color.substring(5, 7), 16)
    const rgba = `rgb(${red}, ${green}, ${blue}, .8)`
    langList.push(
      <LangLi key={i}>
        <LangStyle color={rgba}/>
        <LangName color={mainText}>{props.languages[i].name}</LangName>
      </LangLi>
    )
  }
  
  return(
    <WorkLink href={props.url} target='_blank' rel='noopener noreferrer' color={mainText}>
      <Card border={card} borderHover={worksCardHover} textHover={linkTextHover}>
        <Title>{props.title}</Title>
        <LangUl>
          {langList}
        </LangUl>
        <ImgWrapper>
          <Img src={props.imgSrc}></Img>
        </ImgWrapper>
        <Desc>{props.description}</Desc>
      </Card>
    </WorkLink>
  )
}

/* Styles */
const WorkLink = styled.a`
  text-align: left;
  text-decoration: none;
  color: ${(props: Color) => props.color};
`

const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid ${(props: CardColors) => props.border};
  border-radius: 3px;
  transition: .2s;
  &:hover{
    border: 1px solid ${(props: CardColors) => props.borderHover};
    color: ${(props: CardColors) => props.textHover};
  }
  &:hover Img{
    transform: scale(1.05);
  }
  @media only screen and (max-width: 340px) {
    width: auto;
    height: auto;
  }
`

const Title = styled.h3`
  height: 27px;
  position: relative;
  padding: 5px 5px 0 5px;
  margin: 0;
  @media only screen and (max-width: 340px) {
    height: auto;
  }
`

const LangUl = styled.ul`
  padding: 0 5px 7px 5px;
  margin: 0;
  transition: .2s;
`

const LangLi = styled.li`
  padding-right: 2px;
  display: inline-block;
`

const LangStyle = styled.span`
  display: inline-block;
  background-color: ${(props: Color) => props.color};
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin: 0 3px;
`

const LangName = styled.span`
  font-size: 12px;
  color: ${(props: Color) => props.color};
`

const ImgWrapper = styled.div`
  overflow: hidden;
`

const Img = styled.img`
  position: relative;
  src: url(${(props: Src) => props.src});
  background-repeat: no-repeat;
  object-position: 50% 0;
  object-fit: cover;
  width: 100%;
  height: calc(300px * 9/16);
  transition: .2s;
`

const Desc = styled.p`
  word-wrap: break-word;
  height: 50px;
  padding: 5px;
  margin: 0;
`

export default WorkCard;
