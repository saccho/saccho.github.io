import React, { FunctionComponent, SVGProps } from 'react'
import styled from 'styled-components'
import { skillBackground } from '../data/colors/elements'
import { Color } from '../data/types/elements'

type Props = {
  level: number
  color: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

type CircleProps = Color & {
  background: string
}

const Skill: React.FC<Props> = (props) => {
  const red = parseInt(props.color.substring(1, 3), 16)
  const green = parseInt(props.color.substring(3, 5), 16)
  const blue = parseInt(props.color.substring(5, 7), 16)

  const rgb = `rgb(${red}, ${green}, ${blue})`
  const rgba = `rgb(${red}, ${green}, ${blue}, 0.4)`
  
  return(
    <Circle background={skillBackground} color={rgba}>
      <Icon><props.icon height="55px" width="55px"/></Icon>
      <Name color={rgb}>{props.children}</Name>
    </Circle>
  )
}

/* Styles */
const Circle = styled.div`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  background-color: ${(props: CircleProps) => props.background};
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px ${(props: CircleProps) => props.color};
`

const Icon = styled.div`
  position: absolute;
`

const Name = styled.p`
  color: ${(props: Color) => props.color};
  margin: 0;
  text-align: center;
`

export default Skill
