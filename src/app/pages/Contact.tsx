import React from 'react';
import styled from 'styled-components';
import mailIcon from '../../assets/icons/mail.png'
import twiIcon from '../../assets/icons/twitter.png'

type StyleProps = {
  src: string;
}

const Contact: React.FC = () => {
  return(
    <Wrapper>
      <ContactCard>
        <h3>
          Please feel free to contact me ;)
        </h3>
        <Way>
          <Icon src={mailIcon}/>
          <Link>saccho956[at]yahoo.co.jp</Link>
        </Way>
        <Way as="a">
          <Icon src={twiIcon}/>
          <a href='https://twitter.com/runn_622v' target='_blank' rel='noopener noreferrer'>
            @runn_622v
          </a>
        </Way>
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

const Way = styled.div`
  display: flex;
  margin: 10px;
`

const Icon = styled.img`
  src: url(${(props: StyleProps) => props.src});
  width: 24px;
  height: 24px;
  margin-right: 5px;
`

const Link = styled.span`
  align-items: center;
  justify-content: center;
`

export default Contact
