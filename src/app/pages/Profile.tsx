import React from 'react';
import styled from 'styled-components';
import ItsMe from '../components/ItsMe';
import Experience from '../components/Experience';
import ProfileCard from '../components/ProfileCard';
import Skills from '../components/Skills';
import Conferences from '../components/Conferences';
import Awards from '../components/Awards';

const Profile: React.FC = () => {
  return(
    <div>
      <ItsMe />
      <DescriptionWrapper>
        <Description>
          <ProfileCard title='EXPERIENCES'>
            <Experience
              date='Apr. 2019 - present'
              name='IEEE Shin-etsu Section Student Branch'
              status='Vice-Chair'
            />
            <Experience
              date='Jun 2019 - present'
              name='Fuller, Inc.'
              status='Part-time Job (Android Engineer)'
            />
            <Experience
              date='Apr. 2019 - May 2019'
              name='Fuller, Inc.'
              status='Internship (Android Engineer)'
            />
            <Experience
              date='Sep. 2018 - Sep. 2018'
              name='Excite Japan Co., Ltd.'
              status='Internship (Blockchain Engineer)'
            />
          </ProfileCard>
          <ProfileCard title='EDUCATION'>
            <Experience
              date='Apr. 2018 - present'
              name='Graduate School of Science and Technology, Niigata University'
              status='Master’s course student'
            />
            <Experience
              date='Apr. 2014 - Mar. 2018'
              name='Niigata University'
              status='Bachelor of Engineering'
            />
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
  );
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
