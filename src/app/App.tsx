import React from 'react';
import styled from 'styled-components';
import header from '../assets/header.jpg';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';

type StyleProps = {
  headerUrl: string;
}

const App: React.FC = () => {
  return (
    <Parent>
      <Sidebar />
      <Body>
        <HeaderImg headerUrl={header} />
        <Profile />
      </Body>
    </Parent>
  );
}

/* Styles */
const Parent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const HeaderImg = styled.div`
  height: calc(100vh - 190px);
  background-image: url(${(props: StyleProps) => props.headerUrl});
  background-position: top right;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: calc(100vw - 220px);
`

const Body = styled.div`
  background-color: #FAFAFA;
  flex: 1;
`

export default App;
