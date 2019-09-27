import React from 'react';
import styled from 'styled-components';
import contact from '../data/values/contact'
import { mainText, linkTextHover } from '../data/colors/elements'
import { Color, Src } from '../data/types/elements'

type TwitterLinkColors = Color & {
  textHover: string;
}

const Contact: React.FC = () => {
  return(
    <Wrapper>
      <ContactCard>
        <h3>
          {contact.message}
        </h3>
        <Mail>
          <Icon src={contact.links.mail.icon}/>
          <Link>{contact.links.mail.link}</Link>
        </Mail>
        <Twi
          href='https://twitter.com/runn_622v' 
          target='_blank'
          rel='noopener noreferrer'
          color={mainText}
          textHover={linkTextHover}>
          <Icon src={contact.links.twitter.icon}/>
          <Link color={mainText}>
            @runn_622v
          </Link>
        </Twi>
      </ContactCard>
    </Wrapper>
  )
}

/* Styles */
const Wrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactCard = styled.div`
  align-items: center;
`

const Mail = styled.div`
  display: flex;
  margin: 10px;
`

const Twi = styled.a`
  color: ${(props: TwitterLinkColors) => props.color};
  display: flex;
  margin: 10px;
  transition: .2s;
  &:hover{
    color: ${(props: TwitterLinkColors) => props.textHover};
    opacity: .7;
  }
`

const Icon = styled.img`
  src: url(${(props: Src) => props.src});
  width: 24px;
  height: 24px;
  margin-right: 5px;
`

const Link = styled.span`
  align-items: center;
  justify-content: center;
`

export default Contact
