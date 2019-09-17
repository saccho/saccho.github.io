import React from 'react';
import styled from 'styled-components';
import ImageLink from '../components/ImageLink';
import Experience from '../components/Experience';
import ProfileCard from '../components/ProfileCard';
import Skills from '../components/Skills';
import Conference from '../components/Conference';
import Awards from '../components/Awards';
import itsme from '../../assets/itsme.jpg';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import kaggle from '../../assets/icons/kaggle.png';
import signate from '../../assets/icons/signate.png';

const Profile: React.FC = () => {
  return(
    <div>
      <AboutMe>
        <MyImg src={itsme} className='itsme' alt='itsme' />
        <Bio>
          <Name>Satoru Yasukawa / 安川 悟</Name>
          <Status>Student at Niigata University</Status>
          <Links>
            <ImageLink className='twitter' href='https://twitter.com/runn_622v' iconURL={twitter} />
            <ImageLink className='github' href='https://github.com/saccho' iconURL={github} />
            <ImageLink className='kaggle' href='https://www.kaggle.com/saccho' iconURL={kaggle} />
            <ImageLink className='signate' href='https://signate.jp/users/33557/history' iconURL={signate} />
          </Links>
        </Bio>
      </AboutMe>
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
            <Conference />
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
const AboutMe = styled.div`
  height: 150px;
  display: flex;
  margin: 20px 0 20px 10px;
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

const DescriptionWrapper = styled.div`
  display: flex;
  text-align: left;
`

const Description = styled.div`
  width: 50%;
`

export default Profile;
