import React from 'react'
import styled from 'styled-components'
import { subText } from '../data/colors/elements'
import { Color } from '../data/types/elements'

type Props = {
  name: string
  date: string
  status: string
}

const Experience: React.FC<Props> = (props) => {
  return(
    <Wrapper>
      <ExpList>
        <Name>{props.name}</Name>
        <Date>{props.date}</Date>
      </ExpList>
      <Status color={subText}>{props.status}</Status>
    </Wrapper>
  )
}

/* Styles */
const Name = styled.li`
  padding-right: 3%;
  width: 57%;
`

const Date = styled.li`
  width: 40%;
`

const Status = styled.li`
  margin-top: 5px;
  padding-left: 3%;
  width: 97%;
  color: ${(props: Color) => props.color};
`

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
`

const ExpList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`

export default Experience;
