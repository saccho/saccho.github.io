import React from 'react'
import styled from 'styled-components'
import { skillBackground } from '../data/colors/elements'
import { Color } from '../data/types/elements'

type Props = {
  name: string
  level: number
  color: string
}

type WaveProps = Color & {
  top: number
}

type CircleProps = Color & {
  background: string;
}

const Skill: React.FC<Props> = (props) => {
  const top = 100 - (props.level / 6) * 100

  const red = parseInt(props.color.substring(1, 3), 16)
  const green = parseInt(props.color.substring(3, 5), 16)
  const blue = parseInt(props.color.substring(5, 7), 16)

  const rgb = `rgb(${red}, ${green}, ${blue})`
  const rgba = `rgb(${red}, ${green}, ${blue}, 0.4)`
  
  return(
    <Circle background={skillBackground} color={rgba}>
      <Name color={rgb}>{props.name}</Name>
      <Wave color={props.color} top={top}/>
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
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`

const Name = styled.p`
  color: ${(props: Color) => props.color};
  margin: 0;
  text-align: center;
  z-index: 1;
`

const Wave = styled.div`
  position: absolute;
  top: ${(props: WaveProps) => props.top}%;
  right: -60%;
  opacity: .3;
  background: ${(props: WaveProps) => props.color};
  width: 200px;
  height: 200px;
  border-radius: 45%;
  animation: drift 10s infinite linear;
  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
  z-index: 0;
`

export default Skill;
