import React from 'react';
import styled from 'styled-components';
// import Sidebar from './components/Sidebar';
import MiniSidebar from './components/MiniSidebar';
// import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Works from './pages/Works';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Parent>
        <MiniSidebar />
        <Body>
          <ScrollToTop>
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={Works} />
          </ScrollToTop>
          {/* <Footer /> */}
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
