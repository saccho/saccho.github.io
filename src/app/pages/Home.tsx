import React from 'react';
import styled from 'styled-components';
import header from '../../assets/header.jpg';
import Profile from './Profile';

type StyleProps = {
  headerUrl: string;
}

const Home: React.FC = () => {
  return(
    <div>
      <HeaderImg headerUrl={header} />
      <Profile />
    </div>
  );
}

/* Styles */
const HeaderImg = styled.div`
  /* height: calc((100vw - 220px)*(393/1000)); */
  height: calc((100vw - 80px)*(393/1000));
  background-image: url(${(props: StyleProps) => props.headerUrl});
  background-position: top right;
  background-attachment: fixed;
  background-repeat: no-repeat;
  /* background-size: calc(100vw - 220px); */
  background-size: calc(100vw - 80px);
`

export default Home;
