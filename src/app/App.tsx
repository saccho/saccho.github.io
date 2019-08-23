import React from 'react';
import logo from '../assets/logo.svg';
// import './App.css';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Parent>
      <Sidebar />
      <Body>
        <Profile />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Body>
    </Parent>
  );
}

const Parent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const Body = styled.div`
  background-color: whitesmoke;
  flex: 1;
`

export default App;
