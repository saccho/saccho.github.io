import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Parent>
        <Sidebar />
        <Body>
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
          </ScrollToTop>
        </Body>
      </Parent>
    </Router>
  );
}

/* Styles */
const Parent = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`

const Body = styled.div`
  background-color: #FAFAFA;
  flex: 1;
`

export default App;
