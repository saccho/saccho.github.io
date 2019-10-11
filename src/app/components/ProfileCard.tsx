import React from 'react'
import styled from 'styled-components'
import { mainText, card } from '../data/colors/elements'
import { Color } from '../data/types/elements'

type Props = {
  title: string
}

const ProfileCard: React.FC<Props> = (props) => {
  return(
    <Card color={card}>
      <Title color={mainText}>{props.title}</Title>
      {props.children}
    </Card>
  )
}

/* Styles */
const Title = styled.h3`
  color: ${(props: Color) => props.color};
  margin: 0;
  position: relative;
`

const Card = styled.div`
  border-top: 1px solid ${(props: Color) => props.color};
  padding: 10px 0 10px 10px;
  @media only screen and (max-width: 1023px) {
    padding: 10px;
  }
`

export default ProfileCard;
