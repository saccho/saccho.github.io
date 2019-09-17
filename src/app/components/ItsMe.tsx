import React from 'react';
import styled from 'styled-components';
import ImageLink from './ImageLink';
import itsme from '../../assets/itsme.jpg';
import twitter from '../../assets/icons/twitter.png';
import github from '../../assets/icons/github.png';
import kaggle from '../../assets/icons/kaggle.png';
import signate from '../../assets/icons/signate.png';

const ItsMe: React.FC = () => {
  return(
    <Wrapper>
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
    </Wrapper>
  );
}

/* Styles */
const Wrapper = styled.div`
  height: calc(100vh - (100vw - 220px)*(393/1000));
  display: flex;
  justify-content: center;
  align-items: center;
`

const AboutMe = styled.div`
  position: sticky;
  top: 0;
  height: 150px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0 auto;
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
