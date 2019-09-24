import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  imgSrc: string;
  description: string;
  url: string;
}

type StyleProps = {
  src: string;
}

const WorkCard: React.FC<Props> = (props) => {
  return(
    <WorkLink href={props.url} target='_blank' rel='noopener noreferrer'>
      <Card>
        <Title>{props.title}</Title>
        <ImgWrapper>
          <Img src={props.imgSrc}></Img>
        </ImgWrapper>
        <Desc>{props.description}</Desc>
      </Card>
    </WorkLink>
    );
}

/* Styles */
const WorkLink = styled.a`
  text-align: left;
  display: inline-block;
  margin: 20px;
  vertical-align: top;
  text-decoration: none;
  color: #424242;
`

const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #E0E0E0;
  border-radius: 3px;
  transition: .2s;
  &:hover{
    border: 1px solid #4FC3F7;
    color: #03A9F4
  }
  &:hover Img{
    /* filter: grayscale(0%); */
    transform: scale(1.05);
  }
`

const Title = styled.h3`
  margin: 5px;
  position: relative;
`

const ImgWrapper = styled.div`
  overflow: hidden;
`

const Img = styled.img`
  position: relative;
  src: url(${(props: StyleProps) => props.src});
  background-repeat: no-repeat;
  object-position: 50% 0;
  object-fit: cover;
  width: 300px;
  height: calc(300px * 9/16);
  /* filter: grayscale(100%); */
  transition: .2s;
`

const Desc = styled.p`
  word-wrap: break-word;
  margin: 5px;
`

export default WorkCard;
