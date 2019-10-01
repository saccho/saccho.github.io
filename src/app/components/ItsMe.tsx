import React from 'react'
import styled from 'styled-components'
import SNSLink from './SNSLink'
import my from '../data/values/myProfile'

const ItsMe: React.FC = () => {
  const snsList = []

  for(const i in my.sns) {
    snsList.push(
      <SNSLink key={i} href={my.sns[i].href} iconURL={my.sns[i].icon} />
    )
  }

  return(
    <Wrapper>
      <AboutMe>
        <MyImg src={my.icon}/>
        <Bio>
          <Name>{my.name}</Name>
          <Status>{my.status}</Status>
          <Links>
            {snsList}
          </Links>
        </Bio>
      </AboutMe>
    </Wrapper>
  )
}

/* Styles */
const Wrapper = styled.div`
  height: calc(100vh - (100vw - 80px)*(393/1000));
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    height: calc(100vh - 100vw*(393/1000) - 100px);
  }
  @media only screen and (max-width: 480px) {
    justify-content: start;
    align-items: start;
    height: 400px;
  }
  @media only screen and (min-width: 481px) and (max-height: 720px) {
    justify-content: start;
    align-items: start;
    height: 190px;
  }
`

const AboutMe = styled.div`
  position: sticky;
  top: 0;
  height: 150px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    text-align: center;
    top: 50px;
  }
  @media only screen and (max-width: 480px) {
    position: relative;
    text-align: center;
    display: inline-block;
  }
`

const MyImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 20px;
`

const Name = styled.h3`
  margin: 0;
`

const Status = styled.p`
  margin: 5px 0 0 0;
`

const Links = styled.div`
  margin: 20px 0 0 0;
`

export default ItsMe;
