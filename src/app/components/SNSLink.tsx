import React from 'react'
import styled from 'styled-components'

type Props = {
  href: string
  iconURL: string
}

const SNSLink: React.FC<Props> = (props) => {
  return(
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img src={props.iconURL} />
    </Link>
  )
}

/* Styles */
const Img = styled.img`
  width: 17px;
  height: 17px;
`

const Link = styled.a`
  margin: 0 10px;
  transition: .2s;
  &:hover{
    opacity: .7;
  }
`

export default SNSLink;
