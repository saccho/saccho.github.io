import React from 'react'
import styled from 'styled-components'
import ItsMe from '../components/ItsMe'
import ProfileCard from '../components/ProfileCard'
import Experiences from '../components/Experiences'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Conferences from '../components/Conferences'
import Awards from '../components/Awards'

const Profile: React.FC = () => {
  return(
    <div>
      <ItsMe />
      <DescriptionWrapper>
        <Description>
          <ProfileCard title='EXPERIENCES'>
            <Experiences />
          </ProfileCard>
          <ProfileCard title='EDUCATION'>
            <Education />
          </ProfileCard>
          <ProfileCard title='STUDY'>
            <Conferences />
          </ProfileCard>
          <ProfileCard title='AWARDS'>
            <Awards />
          </ProfileCard>
        </Description>
        <Description>
          <ProfileCard title='SKILLS'>
            <Skills />
          </ProfileCard>
        </Description>
      </DescriptionWrapper>
    </div>
  )
}

/* Styles */
const DescriptionWrapper = styled.div`
  display: flex;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    display: inline-block;
  }
`

const Description = styled.div`
  width: 50%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`



export default Profile;
