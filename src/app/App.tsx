import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Parent>
      <Sidebar />
      <Body>
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

const Body = styled.div`
  flex: 1;
`

export default App;
